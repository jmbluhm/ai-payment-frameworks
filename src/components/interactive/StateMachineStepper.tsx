import { useState } from 'react'
import Card from '../shared/Card'
import CodeBlock from '../shared/CodeBlock'
import Button from '../shared/Button'
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'

const scenarios = {
  happy: {
    name: 'Happy Path',
    steps: [
      {
        status: 'incomplete',
        title: 'Incomplete',
        description: 'Missing required information like shipping address',
        whatToDo: 'Collect missing information via API calls',
        code: `const checkout = await createCheckout({
  line_items: [{
    item: { id: 'sku_999' },
    quantity: 1
  }],
  buyer: {
    email: 'jane@example.com'
  }
})`,
        response: `{
  "id": "chk_123",
  "status": "incomplete",
  "messages": [{
    "type": "error",
    "code": "missing_fulfillment_address",
    "severity": "recoverable"
  }]
}`,
      },
      {
        status: 'ready_for_complete',
        title: 'Ready for Complete',
        description: 'All information collected, ready to finalize',
        whatToDo: 'Submit payment credentials and complete the checkout',
        code: `const updated = await updateCheckout('chk_123', {
  fulfillment: {
    address: {
      line1: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94102'
    }
  }
})`,
        response: `{
  "id": "chk_123",
  "status": "ready_for_complete",
  "totals": [
    { "type": "subtotal", "amount": 9900 },
    { "type": "shipping", "amount": 500 },
    { "type": "tax", "amount": 832 },
    { "type": "total", "amount": 11232 }
  ]
}`,
      },
      {
        status: 'complete',
        title: 'Complete',
        description: 'Transaction finalized, order created',
        whatToDo: 'Display confirmation to user',
        code: `const completed = await completeCheckout('chk_123', {
  payment: {
    credentials: [{
      handler: 'google_pay',
      token: 'tok_abc123'
    }]
  }
})`,
        response: `{
  "id": "chk_123",
  "status": "complete",
  "order": {
    "id": "order_789",
    "confirmation_number": "ABC-123-XYZ"
  },
  "links": [{
    "type": "order_status",
    "url": "https://merchant.com/orders/789"
  }]
}`,
      },
    ],
  },
  escalation: {
    name: 'Escalation',
    steps: [
      {
        status: 'incomplete',
        title: 'Incomplete',
        description: 'Starting checkout with basic information',
        whatToDo: 'Create checkout and collect information',
        code: `const checkout = await createCheckout({
  line_items: [{
    item: { id: 'wine_bottle_001' },
    quantity: 1
  }],
  buyer: {
    email: 'jane@example.com',
    first_name: 'Jane'
  }
})`,
        response: `{
  "id": "chk_456",
  "status": "incomplete",
  "line_items": [{
    "item": {
      "id": "wine_bottle_001",
      "title": "Premium Red Wine",
      "price": 4999
    },
    "quantity": 1
  }]
}`,
      },
      {
        status: 'requires_escalation',
        title: 'Requires Escalation',
        description: 'Age verification required - human input needed',
        whatToDo: 'Present continue_url to user for verification',
        code: `const updated = await updateCheckout('chk_456', {
  fulfillment: {
    address: {
      line1: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94102'
    }
  }
})`,
        response: `{
  "id": "chk_456",
  "status": "requires_escalation",
  "messages": [{
    "type": "error",
    "code": "age_verification_required",
    "severity": "requires_buyer_input",
    "content": "Age verification required for alcohol purchase"
  }],
  "links": [{
    "type": "continue",
    "url": "https://merchant.com/checkout/chk_456?token=xyz"
  }]
}`,
      },
      {
        status: 'ready_for_complete',
        title: 'Ready for Complete',
        description: 'User completed verification, now ready to complete',
        whatToDo: 'Complete the checkout',
        code: `// User completed age verification via continue_url
// Poll to check status
const current = await getCheckout('chk_456')`,
        response: `{
  "id": "chk_456",
  "status": "ready_for_complete",
  "totals": [
    { "type": "subtotal", "amount": 4999 },
    { "type": "tax", "amount": 400 },
    { "type": "total", "amount": 5399 }
  ]
}`,
      },
      {
        status: 'complete',
        title: 'Complete',
        description: 'Transaction finalized successfully',
        whatToDo: 'Display confirmation',
        code: `const completed = await completeCheckout('chk_456', {
  payment: {
    credentials: [{
      handler: 'shop_pay',
      token: 'tok_xyz789'
    }]
  }
})`,
        response: `{
  "id": "chk_456",
  "status": "complete",
  "order": {
    "id": "order_321",
    "confirmation_number": "WINE-456-ABC"
  }
}`,
      },
    ],
  },
}

type ScenarioKey = keyof typeof scenarios

export default function StateMachineStepper() {
  const [scenario, setScenario] = useState<ScenarioKey>('happy')
  const [currentStep, setCurrentStep] = useState(0)

  const steps = scenarios[scenario].steps
  const step = steps[currentStep]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const reset = () => {
    setCurrentStep(0)
  }

  const changeScenario = (newScenario: ScenarioKey) => {
    setScenario(newScenario)
    setCurrentStep(0)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'incomplete':
        return 'bg-warning-amber text-white'
      case 'requires_escalation':
        return 'bg-payment-orange text-white'
      case 'ready_for_complete':
        return 'bg-success-green text-white'
      case 'complete':
        return 'bg-protocol-blue text-white'
      default:
        return 'bg-medium-gray text-white'
    }
  }

  return (
    <Card className="my-8">
      <h3 className="text-h4 mb-6">Checkout State Machine Stepper</h3>

      {/* Scenario Selector */}
      <div className="flex gap-4 mb-8">
        <Button
          variant={scenario === 'happy' ? 'primary' : 'secondary'}
          onClick={() => changeScenario('happy')}
          className="flex-1"
        >
          Happy Path
        </Button>
        <Button
          variant={scenario === 'escalation' ? 'primary' : 'secondary'}
          onClick={() => changeScenario('escalation')}
          className="flex-1"
        >
          Escalation Flow
        </Button>
      </div>

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 flex items-center">
              <button
                onClick={() => setCurrentStep(i)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-protocol-blue ${
                  i === currentStep
                    ? getStatusColor(s.status)
                    : i < currentStep
                    ? 'bg-protocol-blue/20 text-protocol-blue'
                    : 'bg-light-gray text-medium-gray'
                }`}
              >
                {i + 1}
              </button>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    i < currentStep ? 'bg-protocol-blue' : 'bg-light-gray'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`text-body-sm ${
                i === currentStep ? 'text-dark font-semibold' : 'text-medium-gray'
              }`}
              style={{ width: `${100 / steps.length}%`, textAlign: 'center' }}
            >
              {s.title}
            </div>
          ))}
        </div>
      </div>

      {/* Current Step Details */}
      <div className="mb-8">
        <div className={`inline-block px-4 py-2 rounded-full text-body-sm font-semibold mb-4 ${getStatusColor(step.status)}`}>
          {step.status}
        </div>

        <h4 className="text-h3 mb-4">{step.title}</h4>
        <p className="text-body text-medium-gray mb-6">{step.description}</p>

        <div className="bg-protocol-blue/10 border border-protocol-blue/20 rounded-lg p-4 mb-6">
          <h5 className="text-body font-semibold mb-2">What to do:</h5>
          <p className="text-body text-dark">{step.whatToDo}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h5 className="text-body font-semibold mb-2">API Call</h5>
            <CodeBlock code={step.code} language="javascript" />
          </div>
          <div>
            <h5 className="text-body font-semibold mb-2">Response</h5>
            <CodeBlock code={step.response} language="json" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button variant="secondary" onClick={prevStep} disabled={currentStep === 0}>
          <ChevronLeft size={20} className="inline mr-2" />
          Previous
        </Button>

        <Button variant="secondary" onClick={reset}>
          <RotateCcw size={20} className="inline mr-2" />
          Reset
        </Button>

        <Button variant="primary" onClick={nextStep} disabled={currentStep === steps.length - 1}>
          Next
          <ChevronRight size={20} className="inline ml-2" />
        </Button>
      </div>
    </Card>
  )
}
