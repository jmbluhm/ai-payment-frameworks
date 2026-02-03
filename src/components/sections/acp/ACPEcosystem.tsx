import Section from '../../shared/Section'
import Card from '../../shared/Card'
import { Building2, Rocket } from 'lucide-react'

export default function ACPEcosystem() {
  return (
    <Section id="acp-ecosystem" background="white">
      <h2 className="text-h2 mb-6 text-center">The ACP Ecosystem</h2>

      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-body-lg text-center text-medium-gray">
          Growing network of AI platforms, merchants, and payment providers
        </p>
      </div>

      {/* Partners */}
      <div className="mb-16">
        <Card>
          <div className="flex items-start gap-4 mb-6">
            <Building2 className="text-[#635BFF]" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Partner Network</h3>
              <p className="text-body text-medium-gray">
                Co-developed by OpenAI and Stripe, supported by growing ecosystem
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-h4 mb-3">Co-Developers</h4>
              <div className="space-y-2">
                <p className="text-body"><strong className="text-[#10A37F]">OpenAI</strong> - ChatGPT platform and AI expertise</p>
                <p className="text-body"><strong className="text-[#635BFF]">Stripe</strong> - Payment infrastructure and commerce tools</p>
              </div>
            </div>

            <div>
              <h4 className="text-h4 mb-3">Merchant Partners</h4>
              <div className="flex flex-wrap gap-2">
                {['Shopify (1M+)', 'Etsy', 'Growing ecosystem'].map((partner) => (
                  <span key={partner} className="bg-merchant-teal/10 border border-merchant-teal/20 px-3 py-1 rounded text-body-sm">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Integrations */}
      <div>
        <Card>
          <div className="flex items-start gap-4 mb-6">
            <Rocket className="text-success-green" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Live Integrations</h3>
              <p className="text-body text-medium-gray">
                Currently powering commerce in leading AI platforms
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-success-green/10 border-2 border-success-green/20 rounded-lg p-6">
              <div className="text-2xl mb-3">✓ Live</div>
              <h4 className="text-h4 mb-3">ChatGPT Instant Checkout</h4>
              <p className="text-body-sm text-medium-gray">
                First implementation of ACP, enabling seamless shopping in ChatGPT conversations
              </p>
            </div>

            <div className="bg-warning-amber/10 border-2 border-warning-amber/20 rounded-lg p-6">
              <div className="text-2xl mb-3">🚀 Coming Soon</div>
              <h4 className="text-h4 mb-3">Additional Platforms</h4>
              <ul className="text-body-sm text-medium-gray space-y-1">
                <li>• Additional AI agent integrations</li>
                <li>• Regional payment providers</li>
                <li>• Platform-specific features</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
