import Section from '../shared/Section'
import Card from '../shared/Card'
import { Building2, ShoppingBag, Users, Rocket } from 'lucide-react'

export default function Ecosystem() {
  const partners = {
    coDevelopers: [
      { name: 'Shopify', description: 'Years of checkout expertise, millions of merchants' },
      { name: 'Google', description: 'Scale and vision for conversational commerce' },
      { name: 'Etsy', description: 'Marketplace experience and creator focus' },
      { name: 'Wayfair', description: 'Complex product catalog and fulfillment' },
      { name: 'Target', description: 'Enterprise retail operations at scale' },
      { name: 'Walmart', description: 'Global supply chain and omnichannel expertise' },
    ],
    paymentPartners: ['Adyen', 'American Express', 'Mastercard', 'Stripe', 'Visa'],
    retailers: ['Best Buy', 'Flipkart', 'Macy\'s', 'The Home Depot', 'Zalando'],
  }

  const useCases = [
    {
      title: 'Conversational Commerce',
      icon: '💬',
      examples: [
        {
          platform: 'Google AI Mode & Gemini',
          scenario: '"Find me running shoes under $100"',
          description: 'Agent discovers inventory, compares options, completes checkout in chat',
        },
        {
          platform: 'Microsoft Copilot',
          scenario: '"Order my usual grocery list"',
          description: 'Accesses linked account, applies loyalty rewards, schedules delivery',
        },
        {
          platform: 'ChatGPT Shopping',
          scenario: '"Buy a gift for my daughter, $50 budget"',
          description: 'Asks questions, suggests options, handles complete transaction',
        },
      ],
    },
    {
      title: 'Enterprise Procurement',
      icon: '🏢',
      examples: [
        {
          platform: 'Autonomous License Management',
          scenario: 'Monitor software usage and scale licenses',
          description: 'Automatically adjusts licenses up/down, negotiates pricing tiers',
        },
        {
          platform: 'Supply Chain Coordination',
          scenario: 'Order parts when inventory drops below threshold',
          description: 'Monitors stock, compares supplier pricing, places orders automatically',
        },
      ],
    },
    {
      title: 'Specialized Commerce',
      icon: '🎫',
      examples: [
        {
          platform: 'Travel Booking',
          scenario: '"Book me a trip to Paris, first week of June"',
          description: 'Coordinates flights + hotel, finds best combination, books itinerary',
        },
        {
          platform: 'Event Tickets',
          scenario: '"Buy concert tickets when they go on sale"',
          description: 'Intent mandate pre-authorization, executes at sale time autonomously',
        },
      ],
    },
  ]

  return (
    <Section id="ecosystem" background="gray">
      <h2 className="text-h2 mb-6 text-center">The UCP Ecosystem</h2>

      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-body-lg text-center text-medium-gray">
          UCP's strength comes from broad industry collaboration and adoption
        </p>
      </div>

      {/* Partner Network */}
      <div className="mb-16">
        <Card>
          <div className="flex items-start gap-4 mb-8">
            <Building2 className="text-protocol-blue" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Industry Partners</h3>
              <p className="text-body text-medium-gray">
                Leading companies that co-created and endorsed UCP
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-h4 mb-4">Co-Developers</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {partners.coDevelopers.map((partner) => (
                <Card key={partner.name} hover className="bg-protocol-blue/5">
                  <h5 className="text-body font-semibold mb-2 text-protocol-blue">{partner.name}</h5>
                  <p className="text-body-sm text-medium-gray">{partner.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-h4 mb-4">Payment Networks & Processors</h4>
              <div className="flex flex-wrap gap-3">
                {partners.paymentPartners.map((partner) => (
                  <span
                    key={partner}
                    className="bg-payment-orange/10 border border-payment-orange/20 px-4 py-2 rounded-lg text-body-sm font-medium"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-h4 mb-4">Retailers</h4>
              <div className="flex flex-wrap gap-3">
                {partners.retailers.map((partner) => (
                  <span
                    key={partner}
                    className="bg-merchant-teal/10 border border-merchant-teal/20 px-4 py-2 rounded-lg text-body-sm font-medium"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-protocol-blue/10 border border-protocol-blue/20 rounded-lg p-6">
            <p className="text-body font-semibold mb-2">And 15+ more partners</p>
            <p className="text-body-sm text-medium-gray">
              The UCP ecosystem continues to grow as more companies recognize the value of standardized commerce protocols
            </p>
          </div>
        </Card>
      </div>

      {/* Use Cases */}
      <div className="mb-16">
        <Card>
          <div className="flex items-start gap-4 mb-8">
            <ShoppingBag className="text-protocol-blue" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Real-World Applications</h3>
              <p className="text-body text-medium-gray">
                How UCP enables innovative commerce experiences
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {useCases.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h4 className="text-h4">{category.title}</h4>
                </div>

                <div className="space-y-4">
                  {category.examples.map((example) => (
                    <Card key={example.platform} className="bg-off-white">
                      <h5 className="text-body font-semibold mb-2">{example.platform}</h5>
                      <p className="text-body italic mb-2 text-protocol-blue">"{example.scenario}"</p>
                      <p className="text-body-sm text-medium-gray">→ {example.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Integrations */}
      <div className="mb-16">
        <Card>
          <div className="flex items-start gap-4 mb-8">
            <Rocket className="text-protocol-blue" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Platform Integrations</h3>
              <p className="text-body text-medium-gray">
                Live integrations and upcoming launches
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-success-green/10 border-2 border-success-green/20 rounded-lg p-6">
              <div className="text-success-green text-2xl mb-3">✓ Launched</div>
              <div className="space-y-4">
                <div>
                  <h5 className="text-body font-semibold mb-2">Google</h5>
                  <ul className="space-y-1 text-body-sm text-medium-gray">
                    <li>• AI Mode in Google Search</li>
                    <li>• Gemini app checkout</li>
                    <li>• Google Pay integration</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-body font-semibold mb-2">Microsoft</h5>
                  <ul className="space-y-1 text-body-sm text-medium-gray">
                    <li>• Copilot Checkout</li>
                    <li>• Embedded checkout experience</li>
                    <li>• Microsoft 365 integration</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-body font-semibold mb-2">Shopify</h5>
                  <ul className="space-y-1 text-body-sm text-medium-gray">
                    <li>• Agentic Storefronts</li>
                    <li>• Managed from Shopify Admin</li>
                    <li>• Millions of merchants enabled</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-warning-amber/10 border-2 border-warning-amber/20 rounded-lg p-6">
              <div className="text-warning-amber text-2xl mb-3">🚀 Coming Soon</div>
              <div className="space-y-4">
                <div>
                  <h5 className="text-body font-semibold mb-2">OpenAI</h5>
                  <ul className="space-y-1 text-body-sm text-medium-gray">
                    <li>• ChatGPT shopping plugin</li>
                    <li>• Conversational checkout</li>
                    <li>• GPT-4 powered recommendations</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-body font-semibold mb-2">Additional Integrations</h5>
                  <ul className="space-y-1 text-body-sm text-medium-gray">
                    <li>• Regional payment providers</li>
                    <li>• Industry-specific extensions</li>
                    <li>• Vertical market adaptations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Community & Governance */}
      <div>
        <Card className="bg-protocol-blue text-white border-none">
          <div className="flex items-start gap-4 mb-8">
            <Users size={48} />
            <div>
              <h3 className="text-h3 mb-2">Open Governance Model</h3>
              <p className="text-body opacity-90">
                Community-driven development for an open standard
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-h4 mb-3">Contribution Process</h4>
              <ol className="space-y-2 text-body-sm">
                <li>1. GitHub Discussions for proposals</li>
                <li>2. RFC process for significant changes</li>
                <li>3. Community review and feedback</li>
                <li>4. Consensus-based decision making</li>
                <li>5. Version releases via semantic versioning</li>
              </ol>
            </div>

            <div>
              <h4 className="text-h4 mb-3">Governance Principles</h4>
              <ul className="space-y-2 text-body-sm">
                <li>✓ Open and transparent process</li>
                <li>✓ Vendor-neutral decisions</li>
                <li>✓ Backward compatibility priority</li>
                <li>✓ Security-first mindset</li>
                <li>✓ Practical implementation focus</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h4 className="text-h4 mb-4">Roadmap</h4>
            <div className="space-y-2 text-body-sm">
              <div className="flex items-center gap-2">
                <span className="text-success-green">✅</span>
                <span><strong>Q1 2026:</strong> Initial release (Checkout, Identity, Orders)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-warning-amber">🚧</span>
                <span><strong>Q2 2026:</strong> Catalog capability, additional payment handlers</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📋</span>
                <span><strong>Q3 2026:</strong> Advanced fulfillment, subscriptions extension</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📋</span>
                <span><strong>Q4 2026:</strong> Multi-merchant transactions, bundling</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📋</span>
                <span><strong>2027:</strong> Vertical expansions (travel, finance, services)</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
