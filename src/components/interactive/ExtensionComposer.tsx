import { useState } from 'react'
import Card from '../shared/Card'
import CodeBlock from '../shared/CodeBlock'

interface Extension {
  id: string
  name: string
  description: string
  addedFields: string[]
}

const extensions: Extension[] = [
  {
    id: 'fulfillment',
    name: 'dev.ucp.shopping.fulfillment',
    description: 'Shipping, pickup, delivery windows',
    addedFields: ['fulfillment.methods', 'fulfillment.expectations'],
  },
  {
    id: 'discounts',
    name: 'dev.ucp.shopping.discounts',
    description: 'Promo codes, automatic discounts',
    addedFields: ['discounts.codes', 'discounts.automatic'],
  },
  {
    id: 'ap2',
    name: 'dev.ucp.shopping.ap2_mandate',
    description: 'Cryptographic proof for autonomous agents',
    addedFields: ['ap2.cart_mandate', 'ap2.intent_mandate'],
  },
  {
    id: 'subscriptions',
    name: 'dev.ucp.shopping.subscriptions',
    description: 'Recurring billing',
    addedFields: ['subscription.interval', 'subscription.billing_policy'],
  },
]

export default function ExtensionComposer() {
  const [activeExtensions, setActiveExtensions] = useState<string[]>(['fulfillment'])

  const toggleExtension = (id: string) => {
    setActiveExtensions((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    )
  }

  const baseSchema = `{
  "checkout": {
    "id": "chk_123",
    "status": "incomplete",
    "currency": "USD",
    "buyer": {
      "email": "jane@example.com"
    },
    "line_items": [...],
    "totals": [...]
  }
}`

  const getComposedSchema = () => {
    const schema: Record<string, unknown> = {
      checkout: {
        id: 'chk_123',
        status: 'incomplete',
        currency: 'USD',
        buyer: {
          email: 'jane@example.com',
        },
        line_items: ['...'],
        totals: ['...'],
      },
    }

    const activeExts = extensions.filter((e) => activeExtensions.includes(e.id))

    activeExts.forEach((ext) => {
      if (ext.id === 'fulfillment') {
        ;(schema.checkout as Record<string, unknown>).fulfillment = {
          methods: [
            {
              type: 'shipping',
              carriers: ['UPS', 'FedEx'],
            },
          ],
          expectations: [
            {
              min_days: 3,
              max_days: 5,
            },
          ],
        }
      } else if (ext.id === 'discounts') {
        ;(schema.checkout as Record<string, unknown>).discounts = {
          codes: [
            {
              code: 'SAVE10',
              amount: -1000,
            },
          ],
          automatic: [],
        }
      } else if (ext.id === 'ap2') {
        ;(schema.checkout as Record<string, unknown>).ap2 = {
          cart_mandate: 'eyJhbGc...',
          intent_mandate: 'eyJhbGc...',
        }
      } else if (ext.id === 'subscriptions') {
        ;(schema.checkout as Record<string, unknown>).subscription = {
          interval: 'monthly',
          billing_policy: {
            interval_count: 1,
          },
        }
      }
    })

    return JSON.stringify(schema, null, 2)
  }

  return (
    <Card className="my-8">
      <h3 className="text-h4 mb-6">Extension Composer</h3>
      <p className="text-body text-medium-gray mb-8">
        See how extensions augment the base checkout capability without modifying its core schema.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Extension Toggles */}
        <div className="lg:col-span-1">
          <h4 className="text-body font-semibold mb-4">Add Extensions</h4>
          <div className="space-y-4">
            {extensions.map((ext) => (
              <Card
                key={ext.id}
                className={`cursor-pointer transition-all ${
                  activeExtensions.includes(ext.id)
                    ? 'border-protocol-blue bg-protocol-blue/5'
                    : 'hover:border-protocol-blue/50'
                }`}
                onClick={() => toggleExtension(ext.id)}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={activeExtensions.includes(ext.id)}
                    onChange={() => toggleExtension(ext.id)}
                    className="mt-1 w-4 h-4 text-protocol-blue rounded focus:ring-protocol-blue"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="flex-1">
                    <h5 className="text-body font-semibold mb-1">{ext.name.split('.').pop()}</h5>
                    <p className="text-body-sm text-medium-gray mb-2">{ext.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {ext.addedFields.map((field) => (
                        <span
                          key={field}
                          className="text-xs bg-protocol-blue/10 text-protocol-blue px-2 py-1 rounded"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Schema Display */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h4 className="text-body font-semibold mb-2">Base Checkout Schema</h4>
            <CodeBlock code={baseSchema} language="json" />
          </div>

          {activeExtensions.length > 0 && (
            <div>
              <h4 className="text-body font-semibold mb-2">
                Composed Schema{' '}
                <span className="text-body-sm text-success-green">
                  (with {activeExtensions.length} extension{activeExtensions.length !== 1 ? 's' : ''})
                </span>
              </h4>
              <CodeBlock code={getComposedSchema()} language="json" />
            </div>
          )}
        </div>
      </div>

      {/* Benefits */}
      <Card className="bg-protocol-blue/5 border-protocol-blue/20">
        <h4 className="text-h4 mb-4">Benefits of Extension Model</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="text-success-green text-xl">✓</div>
            <div>
              <p className="text-body font-semibold mb-1">Core Stays Stable</p>
              <p className="text-body-sm text-medium-gray">
                Extensions don't modify the base schema, preventing breaking changes
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-success-green text-xl">✓</div>
            <div>
              <p className="text-body font-semibold mb-1">Independent Versioning</p>
              <p className="text-body-sm text-medium-gray">
                Extensions evolve independently without affecting the core
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-success-green text-xl">✓</div>
            <div>
              <p className="text-body font-semibold mb-1">Implement What You Need</p>
              <p className="text-body-sm text-medium-gray">
                Merchants only implement extensions they support
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-success-green text-xl">✓</div>
            <div>
              <p className="text-body font-semibold mb-1">Negotiate Capabilities</p>
              <p className="text-body-sm text-medium-gray">
                Agents only use extensions when both sides support them
              </p>
            </div>
          </div>
        </div>
      </Card>
    </Card>
  )
}
