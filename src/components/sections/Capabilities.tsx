import Section from '../shared/Section'
import Card from '../shared/Card'
import CodeBlock from '../shared/CodeBlock'
import ExtensionComposer from '../interactive/ExtensionComposer'
import { ShoppingCart, Link2, Package, Puzzle } from 'lucide-react'

export default function Capabilities() {
  const checkoutSchema = `{
  "id": "chk_123456789",
  "status": "ready_for_complete",
  "currency": "USD",
  "buyer": {
    "email": "jane@example.com",
    "first_name": "Jane"
  },
  "line_items": [
    {
      "id": "li_1",
      "item": {
        "id": "sku_999",
        "title": "Wireless Headphones",
        "price": 9900
      },
      "quantity": 1
    }
  ],
  "totals": [
    {"type": "subtotal", "amount": 9900},
    {"type": "tax", "amount": 792},
    {"type": "total", "amount": 10692}
  ]
}`

  return (
    <Section id="capabilities" background="gray">
      <h2 className="text-h2 mb-6 text-center">Core Capabilities</h2>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-body-lg text-center text-medium-gray">
          UCP launches with three foundational capabilities, each independently versioned
        </p>
      </div>

      {/* Interactive Extension Composer First */}
      <div className="mb-16">
        <ExtensionComposer />
      </div>

      {/* Checkout Capability */}
      <div className="mb-16">
        <Card className="mb-8 border-2 border-protocol-blue/20">
          <div className="flex items-start gap-4 mb-6">
            <ShoppingCart className="text-protocol-blue flex-shrink-0" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Checkout Capability</h3>
              <p className="text-body text-medium-gray">
                The foundation of UCP commerce: create, manage, and complete checkout sessions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-h4 mb-3">Operations</h4>
              <ul className="space-y-2">
                <li className="text-body flex items-start gap-2">
                  <span className="text-protocol-blue">•</span>
                  <span><strong>create_checkout</strong>: Initialize a new session</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-protocol-blue">•</span>
                  <span><strong>get_checkout</strong>: Retrieve current state</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-protocol-blue">•</span>
                  <span><strong>update_checkout</strong>: Modify line items, buyer info</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-protocol-blue">•</span>
                  <span><strong>complete_checkout</strong>: Finalize and create order</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-protocol-blue">•</span>
                  <span><strong>cancel_checkout</strong>: Abort the session</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-h4 mb-3">Key Features</h4>
              <ul className="space-y-2">
                <li className="text-body flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Dynamic pricing and tax calculation</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Multi-currency support</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Line item management</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Buyer information collection</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Payment handler negotiation</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Structured messaging</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-body font-semibold mb-2">Data Model Example</h4>
            <CodeBlock code={checkoutSchema} language="json" />
          </div>
        </Card>
      </div>

      {/* Identity Linking */}
      <div className="mb-16">
        <Card className="border-2 border-agent-purple/20">
          <div className="flex items-start gap-4 mb-6">
            <Link2 className="text-agent-purple flex-shrink-0" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Identity Linking Capability</h3>
              <p className="text-body text-medium-gray">
                Connect platform accounts with merchant accounts using OAuth 2.0.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-h4 mb-3">Why It Matters</h4>
              <ul className="space-y-2">
                <li className="text-body flex items-start gap-2">
                  <span className="text-agent-purple">•</span>
                  <span>Enables personalized experiences</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-agent-purple">•</span>
                  <span>Unlocks loyalty programs</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-agent-purple">•</span>
                  <span>Provides subscription management</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-agent-purple">•</span>
                  <span>Allows order history access</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-h4 mb-3">OAuth 2.0 Flow</h4>
              <ol className="space-y-2">
                <li className="text-body-sm"><strong>1.</strong> Platform initiates authorization request</li>
                <li className="text-body-sm"><strong>2.</strong> User authenticates with merchant</li>
                <li className="text-body-sm"><strong>3.</strong> Merchant issues authorization code</li>
                <li className="text-body-sm"><strong>4.</strong> Platform exchanges code for access token</li>
                <li className="text-body-sm"><strong>5.</strong> Platform uses token for authenticated requests</li>
              </ol>

              <div className="mt-4 bg-agent-purple/10 border border-agent-purple/20 rounded p-3">
                <p className="text-body-sm font-semibold mb-2">Standard Scopes</p>
                <ul className="space-y-1 text-body-sm">
                  <li><code className="text-xs">ucp:scopes:checkout_session</code></li>
                  <li><code className="text-xs">ucp:scopes:order</code></li>
                  <li><code className="text-xs">ucp:scopes:profile</code></li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Order Management */}
      <div className="mb-16">
        <Card className="border-2 border-merchant-teal/20">
          <div className="flex items-start gap-4 mb-6">
            <Package className="text-merchant-teal flex-shrink-0" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Order Management Capability</h3>
              <p className="text-body text-medium-gray">
                Track post-purchase lifecycle: fulfillment, shipments, returns, refunds.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-merchant-teal/10 border border-merchant-teal/20 rounded p-4">
              <h4 className="text-body font-semibold mb-2">Line Items</h4>
              <p className="text-body-sm text-medium-gray">
                What was purchased and current status with quantity tracking
              </p>
            </div>

            <div className="bg-merchant-teal/10 border border-merchant-teal/20 rounded p-4">
              <h4 className="text-body font-semibold mb-2">Fulfillment Expectations</h4>
              <p className="text-body-sm text-medium-gray">
                Buyer-facing promises for when/how items arrive
              </p>
            </div>

            <div className="bg-merchant-teal/10 border border-merchant-teal/20 rounded p-4">
              <h4 className="text-body font-semibold mb-2">Events</h4>
              <p className="text-body-sm text-medium-gray">
                Append-only log of what happened: shipped, delivered, etc.
              </p>
            </div>

            <div className="bg-merchant-teal/10 border border-merchant-teal/20 rounded p-4">
              <h4 className="text-body font-semibold mb-2">Adjustments</h4>
              <p className="text-body-sm text-medium-gray">
                Post-order events: refund, return, credit, dispute
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Extension Model */}
      <div>
        <Card className="mb-8 border-2 border-warning-amber/20">
          <div className="flex items-start gap-4 mb-6">
            <Puzzle className="text-warning-amber flex-shrink-0" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Extensions: Modular Augmentation</h3>
              <p className="text-body text-medium-gray">
                Extensions add domain-specific functionality without modifying core schemas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-h4 mb-3">Launched Extensions</h4>
              <ul className="space-y-2">
                <li className="text-body flex items-start gap-2">
                  <span className="text-warning-amber">→</span>
                  <span><strong>fulfillment</strong>: Shipping, pickup, delivery windows</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-warning-amber">→</span>
                  <span><strong>discounts</strong>: Promo codes, automatic discounts</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-warning-amber">→</span>
                  <span><strong>ap2_mandate</strong>: Cryptographic proof for autonomous agents</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-warning-amber">→</span>
                  <span><strong>subscriptions</strong>: Recurring billing (coming soon)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-h4 mb-3">Extension Benefits</h4>
              <ul className="space-y-2">
                <li className="text-body flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Core stays stable while extensions evolve</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Merchants implement only what they need</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Agents negotiate only what they support</span>
                </li>
                <li className="text-body flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Independent versioning prevents breaking changes</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
