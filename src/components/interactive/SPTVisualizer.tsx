import { useState } from 'react'
import Card from '../shared/Card'
import CodeBlock from '../shared/CodeBlock'
import { ChevronRight } from 'lucide-react'

const sptSteps = [
  {
    id: 'creation',
    title: '1. Creation',
    subtitle: 'Agent creates SPT',
    description: 'Agent creates a time-limited, scoped payment token',
    actors: ['agent'],
    code: `const spt = await stripe.sharedPaymentTokens.create({
  payment_method: 'pm_card_visa',
  usage_limits: {
    currency: 'usd',
    max_amount: 5000,
    expires_at: Math.floor(Date.now() / 1000) + 900
  },
  seller_details: {
    network_id: 'merchant_123',
    external_id: 'checkout_abc'
  }
});

// Returns: spt_1A2B3C4D5E6F...`,
    highlight: 'Token is scoped to specific merchant and amount, expires in 15 minutes',
  },
  {
    id: 'transmission',
    title: '2. Transmission',
    subtitle: 'Agent → Merchant',
    description: 'Agent sends SPT to merchant (never raw credentials)',
    actors: ['agent', 'merchant'],
    code: `POST /checkouts/{id}/complete
{
  "payment_data": {
    "token": "spt_1A2B3C4D5E6F...",
    "provider": "stripe"
  }
}`,
    highlight: 'Merchant receives opaque token, never sees actual card details',
  },
  {
    id: 'validation',
    title: '3. Validation',
    subtitle: 'Merchant validates SPT',
    description: 'Merchant checks token constraints and fraud signals',
    actors: ['merchant'],
    code: `// Merchant retrieves SPT details
const tokenDetails = await stripe.sharedPaymentTokens.retrieve(
  'spt_1A2B3C4D5E6F...'
);

// Check constraints
if (tokenDetails.usage_limits.max_amount < orderTotal) {
  throw new Error('Token amount insufficient');
}

// Evaluate fraud signals
const riskLevel = tokenDetails.risk_signals.likelihood;`,
    highlight: 'Merchant can verify token validity and assess fraud risk before charging',
  },
  {
    id: 'processing',
    title: '4. Processing',
    subtitle: 'Merchant → Stripe',
    description: 'Merchant creates PaymentIntent with SPT',
    actors: ['merchant', 'payment'],
    code: `const payment = await stripe.paymentIntents.create({
  amount: 5000,
  currency: 'usd',
  shared_payment_granted_token: 'spt_1A2B3C4D5E6F...',
  confirm: true,
  metadata: {
    order_id: 'ord_xyz',
    agent: 'chatgpt'
  }
});

// Stripe validates SPT and processes payment`,
    highlight: 'Stripe validates constraints and processes payment with existing infrastructure',
  },
  {
    id: 'invalidation',
    title: '5. Invalidation',
    subtitle: 'Automatic cleanup',
    description: 'Token is automatically invalidated',
    actors: ['payment'],
    code: `// Token is invalidated after:
// - Successful use
// - Expiration time reached
// - Manual revocation

// No cleanup required`,
    highlight: 'SPT is single-use and automatically cleaned up for security',
  },
]

export default function SPTVisualizer() {
  const [activeStep, setActiveStep] = useState(0)
  const step = sptSteps[activeStep]

  return (
    <Card className="my-8">
      <h3 className="text-h4 mb-6">Shared Payment Token Lifecycle</h3>
      <p className="text-body text-medium-gray mb-8">
        See how SPTs provide secure, scoped payment credentials
      </p>

      {/* Step Selector */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {sptSteps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveStep(i)}
            className={`flex-1 p-4 rounded-lg border-2 transition-all text-left ${
              activeStep === i
                ? 'border-[#635BFF] bg-[#635BFF]/10'
                : 'border-light-gray hover:border-[#635BFF]/50'
            }`}
          >
            <div className="font-semibold text-body mb-1">{s.title}</div>
            <div className="text-body-sm text-medium-gray">{s.subtitle}</div>
          </button>
        ))}
      </div>

      {/* Visual Flow */}
      <div className="mb-8 bg-off-white rounded-lg p-8">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {/* Agent */}
          <div
            className={`flex flex-col items-center transition-opacity ${
              step.actors.includes('agent') ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <div className="w-20 h-20 rounded-full bg-agent-purple flex items-center justify-center text-white font-bold text-2xl mb-2">
              🤖
            </div>
            <p className="text-body-sm font-semibold">AI Agent</p>
          </div>

          {/* Arrow */}
          {(step.id === 'transmission' || step.id === 'creation') && (
            <ChevronRight size={32} className="text-[#635BFF]" />
          )}

          {/* Merchant */}
          {(step.actors.includes('merchant') || step.id === 'validation' || step.id === 'processing') && (
            <>
              <div
                className={`flex flex-col items-center transition-opacity ${
                  step.actors.includes('merchant') ? 'opacity-100' : 'opacity-30'
                }`}
              >
                <div className="w-20 h-20 rounded-full bg-merchant-teal flex items-center justify-center text-white font-bold text-2xl mb-2">
                  🏪
                </div>
                <p className="text-body-sm font-semibold">Merchant</p>
              </div>

              {step.id === 'processing' && <ChevronRight size={32} className="text-[#635BFF]" />}
            </>
          )}

          {/* Payment Provider */}
          {(step.actors.includes('payment') || step.id === 'invalidation') && (
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#635BFF] flex items-center justify-center text-white font-bold text-2xl mb-2">
                💳
              </div>
              <p className="text-body-sm font-semibold">Stripe</p>
            </div>
          )}
        </div>
      </div>

      {/* Step Details */}
      <div className="mb-6">
        <h4 className="text-h3 mb-3">{step.title}</h4>
        <p className="text-body text-medium-gray mb-6">{step.description}</p>

        <CodeBlock code={step.code} language="javascript" />

        <div className="mt-6 bg-[#10A37F]/10 border border-[#10A37F]/20 rounded-lg p-4">
          <p className="text-body font-semibold mb-2">Security Highlight:</p>
          <p className="text-body">{step.highlight}</p>
        </div>
      </div>

      {/* Security Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
          <p className="text-body-sm font-semibold mb-2">🔒 Scoped</p>
          <p className="text-body-sm text-medium-gray">
            Tied to specific merchant and exact amount
          </p>
        </div>
        <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
          <p className="text-body-sm font-semibold mb-2">⏱️ Time-Limited</p>
          <p className="text-body-sm text-medium-gray">
            Expires in minutes, prevents replay attacks
          </p>
        </div>
        <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
          <p className="text-body-sm font-semibold mb-2">🛡️ Single-Use</p>
          <p className="text-body-sm text-medium-gray">
            Automatically invalidated after successful use
          </p>
        </div>
      </div>
    </Card>
  )
}
