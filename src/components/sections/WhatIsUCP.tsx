import Section from '../shared/Section'
import Card from '../shared/Card'
import ComplexityCalculator from '../interactive/ComplexityCalculator'
import { AlertCircle, CheckCircle, TrendingUp, Users } from 'lucide-react'

export default function WhatIsUCP() {
  return (
    <Section id="what-is-ucp" background="gray">
      {/* The Problem */}
      <div className="mb-20">
        <h2 className="text-h2 mb-6 text-center">The Problem: Integration Complexity at Scale</h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-body-lg text-center text-medium-gray mb-8">
            Today's agentic commerce landscape faces a fundamental challenge: Every AI platform needs custom integrations with every merchant. Every merchant must build bespoke connections for every agent.
          </p>
        </div>

        <ComplexityCalculator />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-12">
          <Card hover>
            <AlertCircle className="text-error-red mb-4" size={32} />
            <h3 className="text-h4 mb-2">N×N Complexity</h3>
            <p className="text-body text-medium-gray">
              10 platforms × 10,000 merchants = 100,000 unique integrations
            </p>
          </Card>

          <Card hover>
            <TrendingUp className="text-warning-amber mb-4" size={32} />
            <h3 className="text-h4 mb-2">Maintenance Burden</h3>
            <p className="text-body text-medium-gray">
              Each integration requires ongoing updates and support
            </p>
          </Card>

          <Card hover>
            <Users className="text-error-red mb-4" size={32} />
            <h3 className="text-h4 mb-2">No Standardization</h3>
            <p className="text-body text-medium-gray">
              Higher costs, slower rollout, fragmented ecosystem
            </p>
          </Card>

          <Card hover>
            <AlertCircle className="text-error-red mb-4" size={32} />
            <h3 className="text-h4 mb-2">Innovation Barriers</h3>
            <p className="text-body text-medium-gray">
              Limited reach, inconsistent experiences, security gaps
            </p>
          </Card>
        </div>
      </div>

      {/* The Solution */}
      <div className="mb-20">
        <h2 className="text-h2 mb-6 text-center">The Solution: Universal Commerce Protocol</h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-body-lg text-center text-medium-gray mb-4">
            UCP collapses N×N complexity into a single integration point.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card hover>
            <div className="flex items-start gap-4">
              <CheckCircle className="text-success-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-h4 mb-2">Common Language</h3>
                <p className="text-body text-medium-gray">
                  Standardized discovery, capabilities, and data schemas
                </p>
              </div>
            </div>
          </Card>

          <Card hover>
            <div className="flex items-start gap-4">
              <CheckCircle className="text-success-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-h4 mb-2">Dynamic Negotiation</h3>
                <p className="text-body text-medium-gray">
                  Agents and merchants find their intersection automatically
                </p>
              </div>
            </div>
          </Card>

          <Card hover>
            <div className="flex items-start gap-4">
              <CheckCircle className="text-success-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-h4 mb-2">Flexible Transport</h3>
                <p className="text-body text-medium-gray">
                  Works over REST, MCP, A2A, or embedded protocols
                </p>
              </div>
            </div>
          </Card>

          <Card hover>
            <div className="flex items-start gap-4">
              <CheckCircle className="text-success-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-h4 mb-2">Merchant Control</h3>
                <p className="text-body text-medium-gray">
                  Businesses remain merchant of record with full flexibility
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-protocol-blue text-white border-none">
          <h3 className="text-h3 mb-6">The Result</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-1 flex-shrink-0" size={20} />
              <p className="text-body">Integrate once, reach all UCP-compatible platforms</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-1 flex-shrink-0" size={20} />
              <p className="text-body">Platform-agnostic: works with any AI agent or surface</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-1 flex-shrink-0" size={20} />
              <p className="text-body">Open standard: community-driven, no vendor lock-in</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-1 flex-shrink-0" size={20} />
              <p className="text-body">Production-ready: built from billions of real transactions</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Origin Story */}
      <div>
        <h2 className="text-h2 mb-6 text-center">Built by the Industry, For the Industry</h2>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <h3 className="text-h3 mb-6">Co-Developed By:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-h4 text-protocol-blue mb-2">Shopify</h4>
                <p className="text-body text-medium-gray">
                  Decades of checkout expertise for millions of merchants
                </p>
              </div>
              <div>
                <h4 className="text-h4 text-protocol-blue mb-2">Google</h4>
                <p className="text-body text-medium-gray">
                  Scale and vision for conversational commerce
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <h3 className="text-h4 mb-4">Co-Creators</h3>
              <ul className="space-y-2">
                {['Etsy', 'Wayfair', 'Target', 'Walmart'].map((company) => (
                  <li key={company} className="text-body text-medium-gray flex items-center gap-2">
                    <CheckCircle className="text-success-green" size={16} />
                    {company}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-h4 mb-4">Endorsed By</h3>
              <ul className="space-y-2">
                {['Adyen', 'American Express', 'Mastercard', 'Stripe', 'Visa', 'Best Buy', 'Flipkart', 'Macy\'s', 'The Home Depot', 'Zalando', '10+ more'].map((company) => (
                  <li key={company} className="text-body text-medium-gray flex items-center gap-2">
                    <CheckCircle className="text-success-green" size={16} />
                    {company}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="bg-off-white border-none">
            <p className="text-body text-medium-gray text-center mb-4">
              <span className="text-h4 text-protocol-blue block mb-2">Launch: January 11, 2026</span>
              UCP emerged from real-world commerce challenges, built on the collective wisdom of processing billions of transactions across diverse business models, payment systems, and regulatory environments.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  )
}
