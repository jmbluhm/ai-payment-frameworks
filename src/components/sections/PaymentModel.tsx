import Section from '../shared/Section'
import Card from '../shared/Card'
import CodeBlock from '../shared/CodeBlock'
import PaymentFlowVisualizer from '../interactive/PaymentFlowVisualizer'
import { CreditCard, Lock, Zap } from 'lucide-react'

export default function PaymentModel() {
  const tokenizationFlow = `// 1. Platform calls tokenizer
const response = await fetch('https://tokenizer.example.com/tokenize', {
  method: 'POST',
  body: JSON.stringify({
    source: {
      // Raw payment credentials
    },
    binding: {
      checkout_id: "chk_123456789",
      merchant_id: "merchant_abc"
    }
  })
})

const { token } = await response.json()

// 2. Submit token to merchant
await completeCheckout('chk_123456789', {
  payment: {
    credentials: [{ handler: 'google_pay', token }]
  }
})

// 3. Merchant detokenizes on backend
const credentials = await detokenize(token)`

  const ap2Mandate = `{
  "cart_mandate": "eyJhbGc...",
  "items": [
    {
      "id": "concert_ticket_001",
      "title": "Concert Tickets",
      "quantity": 2,
      "price": 15000
    }
  ],
  "total": 30000,
  "signed_by": "user_public_key",
  "signature": "..."
}`

  return (
    <Section id="payment-model" background="gray">
      <h2 className="text-h2 mb-6 text-center">Payment Architecture: Decoupled & Flexible</h2>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-body-lg text-center text-medium-gray">
          UCP's payment model solves the N×N problem between platforms, merchants, and payment providers
        </p>
      </div>

      {/* Payment Flow First */}
      <div className="mb-16">
        <PaymentFlowVisualizer />
      </div>

      {/* Instruments vs Handlers */}
      <div className="mb-16">
        <Card>
          <div className="flex items-start gap-4 mb-6">
            <CreditCard className="text-protocol-blue" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Understanding the Payment Model</h3>
              <p className="text-body text-medium-gray">
                Key innovation: Separation of payment instruments from payment handlers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-payment-orange/10 border-2 border-payment-orange/20 rounded-lg p-6">
              <h4 className="text-h4 mb-3">Payment Instruments (What)</h4>
              <p className="text-body text-medium-gray mb-4">What the buyer uses to pay</p>
              <ul className="space-y-2 text-body-sm">
                <li>• Credit/debit cards</li>
                <li>• Digital wallets (Google Pay, Apple Pay)</li>
                <li>• Bank transfers</li>
                <li>• Buy-now-pay-later</li>
                <li>• Cryptocurrencies</li>
              </ul>
            </div>

            <div className="bg-merchant-teal/10 border-2 border-merchant-teal/20 rounded-lg p-6">
              <h4 className="text-h4 mb-3">Payment Handlers (How)</h4>
              <p className="text-body text-medium-gray mb-4">Specifications for processing</p>
              <ul className="space-y-2 text-body-sm">
                <li>• Tokenization flows</li>
                <li>• Credential acquisition</li>
                <li>• Authorization processes</li>
                <li>• Settlement mechanisms</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-protocol-blue text-white rounded-lg p-6">
            <h4 className="text-h4 mb-3">Why This Matters</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span className="text-body">Any platform can support any payment method</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span className="text-body">Merchants choose their preferred processors</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span className="text-body">New payment types without protocol changes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span className="text-body">Buyers use their preferred credentials</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Tokenization */}
      <div className="mb-16">
        <Card>
          <div className="flex items-start gap-4 mb-6">
            <Lock className="text-success-green" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Tokenization: Keeping Credentials Safe</h3>
              <p className="text-body text-medium-gray">
                Transform raw credentials into single-use tokens
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-h4 mb-3">The Problem</h4>
            <p className="text-body text-medium-gray">
              Raw payment credentials (card numbers, CVVs) are highly sensitive. Exposing them to platforms creates PCI compliance burden, security risks, and privacy concerns.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-h4 mb-3">The Solution</h4>
            <CodeBlock code={tokenizationFlow} language="javascript" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
              <p className="text-body-sm font-semibold mb-2">Single-Use</p>
              <p className="text-body-sm text-medium-gray">
                Token invalidated after detokenization
              </p>
            </div>
            <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
              <p className="text-body-sm font-semibold mb-2">Time-Limited</p>
              <p className="text-body-sm text-medium-gray">
                Token expires after TTL (e.g., 15 minutes)
              </p>
            </div>
            <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
              <p className="text-body-sm font-semibold mb-2">Scope-Limited</p>
              <p className="text-body-sm text-medium-gray">
                Token only valid for specific merchant
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* AP2 Integration */}
      <div>
        <Card>
          <div className="flex items-start gap-4 mb-6">
            <Zap className="text-warning-amber" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Agent Payments Protocol (AP2)</h3>
              <p className="text-body text-medium-gray">
                For fully autonomous agent transactions with cryptographic proof
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-h4 mb-3">The Challenge</h4>
            <p className="text-body text-medium-gray mb-4">
              When an agent buys autonomously (human not present), how do we prove:
            </p>
            <ul className="space-y-2 text-body">
              <li>• User authorized this specific purchase?</li>
              <li>• Agent didn't hallucinate or err?</li>
              <li>• Clear accountability trail exists?</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-h4 mb-3">AP2's Solution: Verifiable Credentials (Mandates)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="text-body font-semibold mb-2">Intent Mandate</h5>
                <p className="text-body-sm text-medium-gray mb-3">
                  User creates upfront for delegated tasks
                </p>
                <div className="bg-agent-purple/10 border border-agent-purple/20 rounded p-4">
                  <p className="text-body-sm italic">
                    "Buy concert tickets when they go on sale, max $150 each"
                  </p>
                </div>
              </div>

              <div>
                <h5 className="text-body font-semibold mb-2">Cart Mandate</h5>
                <p className="text-body-sm text-medium-gray mb-3">
                  Cryptographically signed proof of final cart approval
                </p>
                <CodeBlock code={ap2Mandate} language="json" />
              </div>
            </div>
          </div>

          <div className="bg-warning-amber/10 border border-warning-amber/20 rounded-lg p-6">
            <h4 className="text-h4 mb-3">How UCP Uses AP2</h4>
            <ol className="space-y-2 text-body">
              <li><strong>1.</strong> Agent includes cart mandate in checkout request</li>
              <li><strong>2.</strong> Merchant verifies cryptographic signature</li>
              <li><strong>3.</strong> Mandate provides non-repudiable proof</li>
              <li><strong>4.</strong> Clear audit trail for dispute resolution</li>
            </ol>
          </div>
        </Card>
      </div>
    </Section>
  )
}
