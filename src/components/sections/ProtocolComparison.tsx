import Section from '../shared/Section'
import Card from '../shared/Card'
import ProtocolComparator from '../interactive/ProtocolComparator'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Button from '../shared/Button'

export default function ProtocolComparison() {
  return (
    <Section id="protocol-comparison" background="gray">
      <h2 className="text-h2 mb-6 text-center">UCP vs ACP: Understanding the Differences</h2>

      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-body-lg text-center text-medium-gray">
          Both protocols enable AI-powered commerce, but take different approaches. Here's how to choose.
        </p>
      </div>

      {/* Interactive Comparison Tool */}
      <div className="mb-20">
        <ProtocolComparator />
      </div>

      {/* Architecture Comparison */}
      <div className="mb-20">
        <h3 className="text-h3 mb-8 text-center">Architecture Comparison</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 border-protocol-blue/20">
            <div className="bg-protocol-blue text-white text-center py-2 px-4 rounded-lg mb-4 inline-block">
              UCP
            </div>
            <h4 className="text-h4 mb-4">Capability-First Design</h4>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Discovery via `/.well-known/ucp`</li>
              <li>• Dynamic capability negotiation</li>
              <li>• Layered protocol stack</li>
              <li>• Multiple transport bindings</li>
              <li>• Provider-agnostic payments</li>
              <li>• Composable extensions</li>
            </ul>
            <div className="mt-6 bg-protocol-blue/10 p-4 rounded">
              <p className="text-body-sm">
                <strong>Best for:</strong> Multi-agent distribution, complex customization, platform aggregators
              </p>
            </div>
          </Card>

          <Card className="border-2 border-[#635BFF]/20">
            <div className="bg-[#635BFF] text-white text-center py-2 px-4 rounded-lg mb-4 inline-block">
              ACP
            </div>
            <h4 className="text-h4 mb-4">Checkout-First Design</h4>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Product feed discovery (CSV/JSON)</li>
              <li>• Four standard REST endpoints</li>
              <li>• Linear checkout flow</li>
              <li>• Shared Payment Tokens</li>
              <li>• Stripe-optimized (extensible)</li>
              <li>• Minimal integration lift</li>
            </ul>
            <div className="mt-6 bg-[#635BFF]/10 p-4 rounded">
              <p className="text-body-sm">
                <strong>Best for:</strong> ChatGPT integration, quick MVP, Stripe merchants, rapid time-to-market
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Use Case Guidance */}
      <div className="mb-20">
        <h3 className="text-h3 mb-8 text-center">Which Protocol Should You Use?</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card hover className="border-2 border-success-green/20">
            <h4 className="text-h4 mb-4 text-success-green">Choose UCP if...</h4>
            <ul className="space-y-3">
              {[
                'Need multi-agent distribution',
                'Complex checkout requirements',
                'Using multiple PSPs',
                'Need extensive customization',
                'Building a platform/aggregator',
                'Long-term extensibility matters',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-body-sm">
                  <CheckCircle className="text-success-green flex-shrink-0 mt-1" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card hover className="border-2 border-success-green/20">
            <h4 className="text-h4 mb-4 text-success-green">Choose ACP if...</h4>
            <ul className="space-y-3">
              {[
                'Targeting ChatGPT specifically',
                'Already using Stripe',
                'Need quick time-to-market',
                'Standard checkout is sufficient',
                'Want simpler integration',
                'Early stage / SMB merchant',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-body-sm">
                  <CheckCircle className="text-success-green flex-shrink-0 mt-1" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card hover className="border-2 border-protocol-blue/20">
            <h4 className="text-h4 mb-4 text-protocol-blue">Consider Both if...</h4>
            <ul className="space-y-3">
              {[
                'Want maximum agent reach',
                'Have engineering resources',
                'Serving diverse use cases',
                'Multiple integration priorities',
                'Long-term strategic investment',
                'Different merchant segments',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-body-sm">
                  <CheckCircle className="text-protocol-blue flex-shrink-0 mt-1" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* Quick Decision Guide */}
      <div>
        <Card className="bg-gradient-to-br from-protocol-blue to-[#635BFF] text-white border-none">
          <h3 className="text-h3 mb-6 text-center">Quick Decision Guide</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-body-sm font-semibold mb-2">Timeline</p>
              <p className="text-body-sm mb-1">Weeks → <strong>ACP</strong></p>
              <p className="text-body-sm">Months → <strong>UCP</strong></p>
            </div>

            <div>
              <p className="text-body-sm font-semibold mb-2">Payment Stack</p>
              <p className="text-body-sm mb-1">Stripe → <strong>ACP</strong></p>
              <p className="text-body-sm">Multiple PSPs → <strong>UCP</strong></p>
            </div>

            <div>
              <p className="text-body-sm font-semibold mb-2">Target Agents</p>
              <p className="text-body-sm mb-1">ChatGPT → <strong>ACP</strong></p>
              <p className="text-body-sm">All agents → <strong>UCP</strong></p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              className="!bg-white !text-protocol-blue !border-white"
              onClick={() => {
                const element = document.getElementById('what-is-ucp')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Learn More About UCP
              <ArrowRight size={16} className="inline ml-2" />
            </Button>
            <Button
              variant="secondary"
              className="!bg-white !text-[#635BFF] !border-white"
              onClick={() => {
                const element = document.getElementById('what-is-acp')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Learn More About ACP
              <ArrowRight size={16} className="inline ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  )
}
