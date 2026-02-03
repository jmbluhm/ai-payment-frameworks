import Section from '../shared/Section'
import Card from '../shared/Card'
import CodeBlock from '../shared/CodeBlock'
import ProfileNegotiator from '../interactive/ProfileNegotiator'
import StateMachineStepper from '../interactive/StateMachineStepper'
import { Bot, Building2, CreditCard, User } from 'lucide-react'

export default function HowItWorks() {
  const merchantProfile = `{
  "ucp": {
    "version": "2026-01-11",
    "services": {
      "dev.ucp.shopping": {
        "version": "2026-01-11",
        "rest": {
          "base_url": "https://merchant.example.com/api"
        }
      }
    },
    "capabilities": [
      {
        "name": "dev.ucp.shopping.checkout",
        "version": "2026-01-11"
      },
      {
        "name": "dev.ucp.shopping.fulfillment",
        "version": "2026-01-11",
        "extends": "dev.ucp.shopping.checkout"
      }
    ],
    "payment": {
      "handlers": ["shop_pay", "google_pay", "card_tokenization"]
    }
  }
}`

  const agentProfile = `{
  "ucp": {
    "version": "2026-01-11",
    "capabilities": [
      {
        "name": "dev.ucp.shopping.checkout",
        "version": "2026-01-11"
      },
      {
        "name": "dev.ucp.shopping.fulfillment",
        "version": "2026-01-11"
      }
    ],
    "payment": {
      "handlers": ["google_pay", "apple_pay"]
    }
  }
}`

  const escalationResponse = `{
  "status": "requires_escalation",
  "messages": [
    {
      "type": "error",
      "code": "age_verification_required",
      "severity": "requires_buyer_input"
    }
  ],
  "links": [
    {
      "type": "continue",
      "url": "https://merchant.com/checkout/chk_123?token=..."
    }
  ]
}`

  return (
    <Section id="how-it-works" background="white">
      <h2 className="text-h2 mb-6 text-center">How UCP Works: Discovery, Negotiation, Transaction</h2>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-body-lg text-center text-medium-gray">
          UCP enables seamless commerce through three core mechanisms
        </p>
      </div>

      {/* Interactive Tools First */}
      <div className="mb-16">
        <ProfileNegotiator />
      </div>

      <div className="mb-20">
        <StateMachineStepper />
      </div>

      {/* The Four Actors */}
      <div className="mb-20">
        <h3 className="text-h3 mb-8 text-center">Four Key Players</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hover className="border-2 border-agent-purple/20">
            <Bot className="text-agent-purple mb-4" size={40} />
            <h4 className="text-h4 mb-3">Platform 🤖</h4>
            <p className="text-body text-medium-gray mb-4">
              The consumer-facing surface (AI agent, app, search engine) acting on behalf of the user.
            </p>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Discovers merchant capabilities</li>
              <li>• Orchestrates the commerce journey</li>
              <li>• Presents UI or conversational interface</li>
              <li>• Examples: Google Gemini, ChatGPT, Microsoft Copilot</li>
            </ul>
          </Card>

          <Card hover className="border-2 border-merchant-teal/20">
            <Building2 className="text-merchant-teal mb-4" size={40} />
            <h4 className="text-h4 mb-3">Business 🏪</h4>
            <p className="text-body text-medium-gray mb-4">
              The entity selling goods or services, acting as Merchant of Record.
            </p>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Exposes commerce capabilities</li>
              <li>• Owns pricing and business logic</li>
              <li>• Processes payments via chosen PSP</li>
              <li>• Controls checkout customization</li>
              <li>• Examples: Shopify merchants, Target, Wayfair</li>
            </ul>
          </Card>

          <Card hover className="border-2 border-payment-orange/20">
            <CreditCard className="text-payment-orange mb-4" size={40} />
            <h4 className="text-h4 mb-3">Payment Credential Provider 💳</h4>
            <p className="text-body text-medium-gray mb-4">
              Entity that tokenizes and provides payment instruments.
            </p>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Securely handles raw payment data</li>
              <li>• Issues tokens for transactions</li>
              <li>• Never exposes credentials to platforms</li>
              <li>• Examples: Google Pay, Shop Pay, Stripe</li>
            </ul>
          </Card>

          <Card hover className="border-2 border-protocol-blue/20">
            <User className="text-protocol-blue mb-4" size={40} />
            <h4 className="text-h4 mb-3">User 👤</h4>
            <p className="text-body text-medium-gray mb-4">
              The person shopping, either actively or through delegated agent tasks.
            </p>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Authorizes transactions</li>
              <li>• Provides payment credentials</li>
              <li>• Benefits from seamless experience</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Discovery & Negotiation */}
      <div className="mb-20">
        <h3 className="text-h3 mb-8 text-center">How Discovery Works</h3>

        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-body text-medium-gray mb-6">
            Every UCP participant publishes a profile declaring their capabilities. The platform and merchant compute their intersection to determine what features are available for this transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-h4 mb-4">Merchant Profile (at <code className="text-protocol-blue">/.well-known/ucp</code>)</h4>
            <CodeBlock code={merchantProfile} language="json" />
          </div>

          <div>
            <h4 className="text-h4 mb-4">Agent Profile</h4>
            <CodeBlock code={agentProfile} language="json" />
          </div>
        </div>

        <Card className="bg-success-green/10 border-success-green/20 mb-8">
          <h4 className="text-h4 mb-4">Negotiated Result (Intersection)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-body-sm font-semibold mb-2">Capabilities</p>
              <ul className="space-y-2">
                <li className="text-body text-success-green">✓ Checkout capability</li>
                <li className="text-body text-success-green">✓ Fulfillment extension</li>
                <li className="text-body text-medium-gray">✗ Discounts (agent doesn't support)</li>
              </ul>
            </div>
            <div>
              <p className="text-body-sm font-semibold mb-2">Payment Handlers</p>
              <ul className="space-y-2">
                <li className="text-body text-success-green">✓ Google Pay (supported by both)</li>
                <li className="text-body text-medium-gray">✗ Shop Pay (agent doesn't support)</li>
                <li className="text-body text-medium-gray">✗ Apple Pay (merchant doesn't support)</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Checkout State Machine */}
      <div>
        <h3 className="text-h3 mb-8 text-center">The Checkout Lifecycle</h3>

        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-body text-medium-gray mb-6">
            UCP models checkout as a simple state machine with clear transitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-warning-amber/10 border-warning-amber/20">
            <div className="text-2xl mb-2">🟡</div>
            <h4 className="text-h4 mb-2">incomplete</h4>
            <p className="text-body-sm text-medium-gray">
              Missing required information. Agent should resolve via API calls.
            </p>
          </Card>

          <Card className="bg-payment-orange/10 border-payment-orange/20">
            <div className="text-2xl mb-2">🟠</div>
            <h4 className="text-h4 mb-2">requires_escalation</h4>
            <p className="text-body-sm text-medium-gray">
              Human input required. Agent provides continue_url for user.
            </p>
          </Card>

          <Card className="bg-success-green/10 border-success-green/20">
            <div className="text-2xl mb-2">🟢</div>
            <h4 className="text-h4 mb-2">ready_for_complete</h4>
            <p className="text-body-sm text-medium-gray">
              All information collected. Agent can finalize programmatically.
            </p>
          </Card>

          <Card className="bg-protocol-blue/10 border-protocol-blue/20">
            <div className="text-2xl mb-2">✅</div>
            <h4 className="text-h4 mb-2">complete</h4>
            <p className="text-body-sm text-medium-gray">
              Transaction finalized. Order created. Confirmation sent.
            </p>
          </Card>
        </div>

        <Card className="mb-8">
          <h4 className="text-h4 mb-4">Key Principle: No Transaction Left Behind</h4>
          <p className="text-body text-medium-gray mb-4">
            When an agent hits a capability gap, UCP routes around it with structured escalation:
          </p>
          <CodeBlock code={escalationResponse} language="json" />
          <p className="text-body text-medium-gray mt-4">
            The user clicks the <code className="text-protocol-blue">continue_url</code>, completes verification, and returns seamlessly.
          </p>
        </Card>
      </div>
    </Section>
  )
}
