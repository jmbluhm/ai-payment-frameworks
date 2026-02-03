import { useState } from 'react'
import Card from '../shared/Card'
import CodeBlock from '../shared/CodeBlock'
import { ChevronRight } from 'lucide-react'

const steps = [
  {
    id: 'negotiation',
    title: '1. Negotiation',
    subtitle: 'Business → Platform',
    description: 'Merchant analyzes the cart and advertises available payment handlers',
    actors: ['business', 'platform'],
    code: `{
  "payment": {
    "handlers": [
      {
        "handler": "google_pay",
        "config": {
          "merchant_id": "BCR2DN4TR...",
          "gateway": "stripe",
          "gateway_merchant_id": "acct_1234"
        }
      },
      {
        "handler": "shop_pay",
        "config": {
          "shop_id": "shop_123"
        }
      }
    ]
  }
}`,
    highlight: 'Merchant determines which payment methods are available based on cart contents and buyer location',
  },
  {
    id: 'acquisition',
    title: '2. Acquisition',
    subtitle: 'Platform ↔ Payment Provider',
    description: 'Platform executes handler logic client-side to tokenize payment credentials',
    actors: ['platform', 'payment'],
    code: `// Platform calls tokenizer
const token = await tokenize({
  handler: "google_pay",
  credentials: {
    // Raw payment data
  },
  binding: {
    checkout_id: "chk_123",
    merchant_id: "merchant_abc"
  }
})

// Returns opaque token
// { token: "tok_1A2B3C..." }`,
    highlight: 'Platform never exposes raw payment data to merchant. Direct interaction with payment provider.',
  },
  {
    id: 'completion',
    title: '3. Completion',
    subtitle: 'Platform → Business',
    description: 'Platform submits opaque token to merchant for processing',
    actors: ['platform', 'business'],
    code: `{
  "payment": {
    "credentials": [
      {
        "handler": "google_pay",
        "instrument": "card",
        "token": "tok_1A2B3C..."
      }
    ]
  }
}

// Merchant processes via backend PSP integration
// Token is detokenized securely on backend`,
    highlight: 'Merchant receives token and processes payment via their chosen PSP backend',
  },
]

export default function PaymentFlowVisualizer() {
  const [activeStep, setActiveStep] = useState(0)
  const step = steps[activeStep]

  return (
    <Card className="my-8">
      <h3 className="text-h4 mb-6">Payment Flow: 3-Step Lifecycle</h3>

      {/* Step Selector */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {steps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveStep(i)}
            className={`flex-1 p-4 rounded-lg border-2 transition-all text-left ${
              activeStep === i
                ? 'border-protocol-blue bg-protocol-blue/10'
                : 'border-light-gray hover:border-protocol-blue/50'
            }`}
          >
            <div className="font-semibold text-body mb-1">{s.title}</div>
            <div className="text-body-sm text-medium-gray">{s.subtitle}</div>
          </button>
        ))}
      </div>

      {/* Visual Flow */}
      <div className="mb-8 bg-off-white rounded-lg p-8">
        <div className="flex items-center justify-center gap-6">
          {/* Platform */}
          <div
            className={`flex flex-col items-center transition-opacity ${
              step.actors.includes('platform') ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <div className="w-20 h-20 rounded-full bg-agent-purple flex items-center justify-center text-white font-bold text-2xl mb-2">
              P
            </div>
            <p className="text-body-sm font-semibold">Platform</p>
          </div>

          {/* Arrow */}
          {step.id === 'negotiation' && (
            <ChevronRight size={32} className="text-protocol-blue" />
          )}
          {step.id === 'acquisition' && (
            <div className="flex items-center gap-2">
              <ChevronRight size={32} className="text-protocol-blue" />
              <ChevronRight size={32} className="text-protocol-blue rotate-180" />
            </div>
          )}
          {step.id === 'completion' && (
            <ChevronRight size={32} className="text-protocol-blue" />
          )}

          {/* Payment or Business */}
          {step.id === 'acquisition' ? (
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-payment-orange flex items-center justify-center text-white font-bold text-2xl mb-2">
                💳
              </div>
              <p className="text-body-sm font-semibold">Payment Provider</p>
            </div>
          ) : (
            <div
              className={`flex flex-col items-center transition-opacity ${
                step.actors.includes('business') ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div className="w-20 h-20 rounded-full bg-merchant-teal flex items-center justify-center text-white font-bold text-2xl mb-2">
                B
              </div>
              <p className="text-body-sm font-semibold">Business</p>
            </div>
          )}
        </div>
      </div>

      {/* Step Details */}
      <div className="mb-6">
        <h4 className="text-h3 mb-3">{step.title}</h4>
        <p className="text-body text-medium-gray mb-4">{step.description}</p>

        <div className="bg-protocol-blue/10 border border-protocol-blue/20 rounded-lg p-4 mb-6">
          <p className="text-body font-semibold mb-2">Key Point:</p>
          <p className="text-body">{step.highlight}</p>
        </div>

        <CodeBlock code={step.code} language="javascript" />
      </div>

      {/* Security Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
          <p className="text-body-sm font-semibold mb-2">🔒 Platform Never Sees Card Numbers</p>
          <p className="text-body-sm text-medium-gray">
            Raw credentials stay with payment provider
          </p>
        </div>
        <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
          <p className="text-body-sm font-semibold mb-2">⏱️ Tokens Are Single-Use</p>
          <p className="text-body-sm text-medium-gray">
            Time-limited and bound to specific checkout
          </p>
        </div>
        <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
          <p className="text-body-sm font-semibold mb-2">🏪 Merchant Controls Backend</p>
          <p className="text-body-sm text-medium-gray">
            Choose your PSP and integration
          </p>
        </div>
      </div>
    </Card>
  )
}
