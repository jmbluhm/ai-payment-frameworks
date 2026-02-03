import { useState } from 'react'
import Card from '../shared/Card'
import CodeBlock from '../shared/CodeBlock'
import Button from '../shared/Button'
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'

const steps = [
  {
    id: 'discovery',
    title: '1. Discovery',
    subtitle: 'User → AI Agent',
    description: 'User searches for products conversationally',
    userQuery: '"I need a wireless keyboard under $50"',
    actor: 'agent',
    code: `// AI Agent searches merchant catalogs
const products = await searchProducts({
  query: "wireless keyboard",
  max_price: 5000,
  currency: "usd"
});

// Present options to user
presentProducts(products);`,
    explanation: 'Agent discovers inventory across merchants, compares options, and presents relevant choices.',
  },
  {
    id: 'create',
    title: '2. Create Checkout',
    subtitle: 'AI Agent → Merchant',
    description: 'Agent creates checkout session with merchant',
    actor: 'merchant',
    code: `POST /checkouts
{
  "items": [
    {"sku": "kbd-wireless-001", "quantity": 1}
  ],
  "buyer": {
    "email": "jane@example.com",
    "first_name": "Jane"
  }
}`,
    response: `{
  "id": "checkout_abc123",
  "status": "pending_fulfillment",
  "line_items": [...],
  "fulfillment_options": [
    {
      "id": "standard",
      "title": "Standard Shipping",
      "total": 500
    }
  ],
  "total": 10300
}`,
    explanation: 'Merchant responds with available options, calculated totals, and current state.',
  },
  {
    id: 'update',
    title: '3. Update Checkout',
    subtitle: 'AI Agent ↔ Merchant',
    description: 'Agent collects and submits fulfillment information',
    actor: 'merchant',
    code: `PUT /checkouts/{id}
{
  "fulfillment_address": {
    "name": "Jane Doe",
    "line_one": "456 Oak Ave",
    "city": "Los Angeles",
    "state": "CA",
    "postal_code": "90210"
  },
  "fulfillment_option_id": "express"
}`,
    response: `{
  "id": "checkout_abc123",
  "status": "ready_for_payment",
  "total": 15300,
  "tax": 1225,
  "shipping": 1000
}`,
    explanation: 'Merchant recalculates totals based on selected address and shipping option.',
  },
  {
    id: 'complete',
    title: '4. Complete Checkout',
    subtitle: 'AI Agent → Payment Provider → Merchant',
    description: 'Agent creates SPT and completes purchase',
    actor: 'payment',
    code: `// Agent creates Shared Payment Token
const spt = await stripe.sharedPaymentTokens.create({
  payment_method: 'pm_card_visa',
  usage_limits: {
    currency: 'usd',
    max_amount: 15300,
    expires_at: Date.now() + (15 * 60 * 1000)
  },
  seller_details: {
    network_id: 'merchant_abc',
    external_id: 'checkout_abc123'
  }
});

// Complete checkout with token
POST /checkouts/{id}/complete
{
  "payment_data": {
    "token": spt.id,
    "provider": "stripe"
  }
}`,
    response: `{
  "id": "checkout_abc123",
  "status": "complete",
  "order": {
    "id": "ord_xyz789",
    "order_number": "ORD-2025-001"
  }
}`,
    explanation: 'Merchant processes payment with SPT and returns order confirmation.',
  },
]

export default function ACPFlowStepper() {
  const [currentStep, setCurrentStep] = useState(0)
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

  const getActorColor = (actor: string) => {
    switch (actor) {
      case 'agent':
        return 'bg-agent-purple text-white'
      case 'merchant':
        return 'bg-merchant-teal text-white'
      case 'payment':
        return 'bg-payment-orange text-white'
      default:
        return 'bg-[#635BFF] text-white'
    }
  }

  return (
    <Card className="my-8">
      <h3 className="text-h4 mb-6">ACP Checkout Flow: Step-by-Step</h3>

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {steps.map((_, i) => (
            <div key={i} className="flex-1 flex items-center">
              <button
                onClick={() => setCurrentStep(i)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#635BFF] ${
                  i === currentStep
                    ? 'bg-[#635BFF] text-white'
                    : i < currentStep
                    ? 'bg-[#635BFF]/20 text-[#635BFF]'
                    : 'bg-light-gray text-medium-gray'
                }`}
              >
                {i + 1}
              </button>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    i < currentStep ? 'bg-[#635BFF]' : 'bg-light-gray'
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
        <div className={`inline-block px-4 py-2 rounded-full text-body-sm font-semibold mb-4 ${getActorColor(step.actor)}`}>
          {step.subtitle}
        </div>

        <h4 className="text-h3 mb-4">{step.title}</h4>
        <p className="text-body text-medium-gray mb-6">{step.description}</p>

        {step.userQuery && (
          <div className="bg-[#10A37F]/10 border border-[#10A37F]/20 rounded-lg p-4 mb-6">
            <p className="text-body italic text-[#10A37F]">{step.userQuery}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <h5 className="text-body font-semibold mb-2">Request</h5>
            <CodeBlock code={step.code} language="javascript" />
          </div>
          {step.response && (
            <div>
              <h5 className="text-body font-semibold mb-2">Response</h5>
              <CodeBlock code={step.response} language="json" />
            </div>
          )}
        </div>

        <div className="bg-[#635BFF]/10 border border-[#635BFF]/20 rounded-lg p-4">
          <p className="text-body">{step.explanation}</p>
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

        <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          Next
          <ChevronRight size={20} className="inline ml-2" />
        </Button>
      </div>
    </Card>
  )
}
