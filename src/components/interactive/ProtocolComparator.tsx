import { useState } from 'react'
import Card from '../shared/Card'

interface ComparisonData {
  feature: string
  ucp: string
  acp: string
  category: string
}

const comparisons: ComparisonData[] = [
  // Foundation
  { feature: 'Founded By', ucp: 'Shopify + Google', acp: 'OpenAI + Stripe', category: 'foundation' },
  { feature: 'Launch Date', ucp: 'January 2026', acp: 'September 2025', category: 'foundation' },
  { feature: 'Primary Focus', ucp: 'Comprehensive commerce protocol', acp: 'Checkout-first approach', category: 'foundation' },
  { feature: 'License', ucp: 'Open source', acp: 'Apache 2.0', category: 'foundation' },

  // Architecture
  { feature: 'Discovery', ucp: '/.well-known/ucp profile', acp: 'Product feed (CSV/JSON)', category: 'architecture' },
  { feature: 'Negotiation', ucp: 'Dynamic capability intersection', acp: 'Implicit via endpoints', category: 'architecture' },
  { feature: 'Transport', ucp: 'REST, MCP, A2A, Embedded', acp: 'REST, MCP (in dev)', category: 'architecture' },
  { feature: 'State Machine', ucp: 'Explicit (4 states)', acp: 'Implicit (3 states)', category: 'architecture' },

  // Capabilities
  { feature: 'Checkout', ucp: '✅ Full lifecycle', acp: '✅ Four-endpoint flow', category: 'capabilities' },
  { feature: 'Identity Linking', ucp: '✅ OAuth 2.0', acp: '⏳ Coming soon', category: 'capabilities' },
  { feature: 'Order Management', ucp: '✅ Full tracking', acp: '⏳ Webhook notifications', category: 'capabilities' },
  { feature: 'Product Catalog', ucp: '⏳ Roadmap', acp: '✅ Product Feed Spec', category: 'capabilities' },
  { feature: 'Subscriptions', ucp: '⏳ Extension in dev', acp: '⏳ Future', category: 'capabilities' },

  // Payment
  { feature: 'Payment Method', ucp: 'Tokenization handlers', acp: 'Shared Payment Tokens', category: 'payment' },
  { feature: 'PSP Flexibility', ucp: 'Any PSP via handlers', acp: 'Stripe (primary)', category: 'payment' },
  { feature: 'Fraud Detection', ucp: 'PSP-dependent', acp: 'Stripe Radar built-in', category: 'payment' },

  // Implementation
  { feature: 'Integration Complexity', ucp: 'Moderate', acp: 'Low (4 endpoints)', category: 'implementation' },
  { feature: 'Time to Market', ucp: '2-3 months', acp: 'Weeks', category: 'implementation' },
  { feature: 'Merchant of Record', ucp: '✅ Always', acp: '✅ Always', category: 'implementation' },
]

const categories = [
  { id: 'all', name: 'All Features' },
  { id: 'foundation', name: 'Foundation' },
  { id: 'architecture', name: 'Architecture' },
  { id: 'capabilities', name: 'Capabilities' },
  { id: 'payment', name: 'Payment' },
  { id: 'implementation', name: 'Implementation' },
]

export default function ProtocolComparator() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredComparisons = selectedCategory === 'all'
    ? comparisons
    : comparisons.filter(c => c.category === selectedCategory)

  return (
    <Card className="my-8">
      <h3 className="text-h4 mb-6">Protocol Feature Comparison</h3>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-body-sm font-semibold transition-colors ${
              selectedCategory === cat.id
                ? 'bg-protocol-blue text-white'
                : 'bg-light-gray text-medium-gray hover:bg-protocol-blue/10'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-protocol-blue to-[#635BFF]">
              <th className="text-left p-4 text-white font-semibold">Feature</th>
              <th className="text-left p-4 text-white font-semibold">UCP</th>
              <th className="text-left p-4 text-white font-semibold">ACP</th>
            </tr>
          </thead>
          <tbody>
            {filteredComparisons.map((item, index) => (
              <tr
                key={index}
                className="border-b border-light-gray hover:bg-off-white transition-colors"
              >
                <td className="p-4 font-medium">{item.feature}</td>
                <td className="p-4 text-medium-gray">{item.ucp}</td>
                <td className="p-4 text-medium-gray">{item.acp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 text-body-sm">
        <div className="flex items-center gap-2">
          <span className="text-success-green">✅</span>
          <span className="text-medium-gray">Fully supported</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-warning-amber">⏳</span>
          <span className="text-medium-gray">Coming soon / In development</span>
        </div>
      </div>
    </Card>
  )
}
