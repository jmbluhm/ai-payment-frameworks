import { useState } from 'react'
import Card from '../shared/Card'
import CodeBlock from '../shared/CodeBlock'
import { CheckCircle, XCircle } from 'lucide-react'

interface Capability {
  id: string
  name: string
  label: string
}

interface PaymentHandler {
  id: string
  name: string
}

const capabilities: Capability[] = [
  { id: 'checkout', name: 'dev.ucp.shopping.checkout', label: 'Checkout Capability' },
  { id: 'fulfillment', name: 'dev.ucp.shopping.fulfillment', label: 'Fulfillment Extension' },
  { id: 'discounts', name: 'dev.ucp.shopping.discounts', label: 'Discounts Extension' },
  { id: 'subscriptions', name: 'dev.ucp.shopping.subscriptions', label: 'Subscriptions Extension' },
  { id: 'identity', name: 'dev.ucp.identity_linking', label: 'Identity Linking' },
]

const paymentHandlers: PaymentHandler[] = [
  { id: 'google_pay', name: 'Google Pay' },
  { id: 'shop_pay', name: 'Shop Pay' },
  { id: 'apple_pay', name: 'Apple Pay' },
  { id: 'stripe', name: 'Stripe' },
  { id: 'paypal', name: 'PayPal' },
]

export default function ProfileNegotiator() {
  const [merchantCapabilities, setMerchantCapabilities] = useState<string[]>([
    'checkout',
    'fulfillment',
    'discounts',
  ])
  const [merchantPayments, setMerchantPayments] = useState<string[]>([
    'google_pay',
    'shop_pay',
    'stripe',
  ])
  const [agentCapabilities, setAgentCapabilities] = useState<string[]>([
    'checkout',
    'fulfillment',
  ])
  const [agentPayments, setAgentPayments] = useState<string[]>(['google_pay', 'apple_pay', 'paypal'])

  const toggleMerchantCapability = (id: string) => {
    setMerchantCapabilities((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const toggleAgentCapability = (id: string) => {
    setAgentCapabilities((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const toggleMerchantPayment = (id: string) => {
    setMerchantPayments((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const toggleAgentPayment = (id: string) => {
    setAgentPayments((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const negotiatedCapabilities = capabilities.filter(
    (c) => merchantCapabilities.includes(c.id) && agentCapabilities.includes(c.id)
  )

  const negotiatedPayments = paymentHandlers.filter(
    (p) => merchantPayments.includes(p.id) && agentPayments.includes(p.id)
  )

  const merchantProfile = {
    ucp: {
      version: '2026-01-11',
      services: {
        'dev.ucp.shopping': {
          version: '2026-01-11',
          rest: {
            base_url: 'https://merchant.example.com/api',
          },
        },
      },
      capabilities: capabilities
        .filter((c) => merchantCapabilities.includes(c.id))
        .map((c) => ({ name: c.name, version: '2026-01-11' })),
      payment: {
        handlers: merchantPayments,
      },
    },
  }

  const agentProfile = {
    ucp: {
      version: '2026-01-11',
      capabilities: capabilities
        .filter((c) => agentCapabilities.includes(c.id))
        .map((c) => ({ name: c.name, version: '2026-01-11' })),
      payment: {
        handlers: agentPayments,
      },
    },
  }

  return (
    <Card className="my-8">
      <h3 className="text-h4 mb-6">Profile Negotiation Simulator</h3>
      <p className="text-body text-medium-gray mb-8">
        Toggle capabilities and payment handlers to see how UCP negotiates compatibility between
        platforms and merchants.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Merchant Profile */}
        <div>
          <h4 className="text-h4 mb-4 text-merchant-teal">Merchant Profile</h4>

          <div className="space-y-4 mb-6">
            <div>
              <p className="text-body-sm font-semibold mb-2">Capabilities</p>
              <div className="space-y-2">
                {capabilities.map((cap) => (
                  <label key={cap.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={merchantCapabilities.includes(cap.id)}
                      onChange={() => toggleMerchantCapability(cap.id)}
                      className="w-4 h-4 text-merchant-teal rounded focus:ring-merchant-teal"
                    />
                    <span className="text-body-sm">{cap.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-body-sm font-semibold mb-2">Payment Handlers</p>
              <div className="space-y-2">
                {paymentHandlers.map((handler) => (
                  <label key={handler.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={merchantPayments.includes(handler.id)}
                      onChange={() => toggleMerchantPayment(handler.id)}
                      className="w-4 h-4 text-merchant-teal rounded focus:ring-merchant-teal"
                    />
                    <span className="text-body-sm">{handler.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Agent Profile */}
        <div>
          <h4 className="text-h4 mb-4 text-agent-purple">Agent Profile</h4>

          <div className="space-y-4 mb-6">
            <div>
              <p className="text-body-sm font-semibold mb-2">Capabilities</p>
              <div className="space-y-2">
                {capabilities.map((cap) => (
                  <label key={cap.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agentCapabilities.includes(cap.id)}
                      onChange={() => toggleAgentCapability(cap.id)}
                      className="w-4 h-4 text-agent-purple rounded focus:ring-agent-purple"
                    />
                    <span className="text-body-sm">{cap.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-body-sm font-semibold mb-2">Payment Handlers</p>
              <div className="space-y-2">
                {paymentHandlers.map((handler) => (
                  <label key={handler.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agentPayments.includes(handler.id)}
                      onChange={() => toggleAgentPayment(handler.id)}
                      className="w-4 h-4 text-agent-purple rounded focus:ring-agent-purple"
                    />
                    <span className="text-body-sm">{handler.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Negotiated Result */}
        <div>
          <h4 className="text-h4 mb-4 text-protocol-blue">Negotiated Result</h4>

          <div className="space-y-4">
            <div>
              <p className="text-body-sm font-semibold mb-2">Supported Capabilities</p>
              <div className="space-y-2">
                {capabilities.map((cap) => {
                  const isSupported = negotiatedCapabilities.some((nc) => nc.id === cap.id)
                  return (
                    <div
                      key={cap.id}
                      className={`flex items-center gap-2 text-body-sm ${
                        isSupported ? 'text-success-green' : 'text-medium-gray'
                      }`}
                    >
                      {isSupported ? (
                        <CheckCircle size={16} className="flex-shrink-0" />
                      ) : (
                        <XCircle size={16} className="flex-shrink-0" />
                      )}
                      <span>{cap.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <p className="text-body-sm font-semibold mb-2">Payment Handlers</p>
              <div className="space-y-2">
                {paymentHandlers.map((handler) => {
                  const isSupported = negotiatedPayments.some((np) => np.id === handler.id)
                  return (
                    <div
                      key={handler.id}
                      className={`flex items-center gap-2 text-body-sm ${
                        isSupported ? 'text-success-green' : 'text-medium-gray'
                      }`}
                    >
                      {isSupported ? (
                        <CheckCircle size={16} className="flex-shrink-0" />
                      ) : (
                        <XCircle size={16} className="flex-shrink-0" />
                      )}
                      <span>{handler.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {negotiatedCapabilities.length === 0 || negotiatedPayments.length === 0 ? (
              <div className="bg-warning-amber/10 border border-warning-amber/20 rounded p-3 mt-4">
                <p className="text-body-sm text-warning-amber">
                  ⚠️ No compatible {negotiatedCapabilities.length === 0 ? 'capabilities' : 'payment methods'} found
                </p>
              </div>
            ) : (
              <div className="bg-success-green/10 border border-success-green/20 rounded p-3 mt-4">
                <p className="text-body-sm text-success-green">
                  ✓ Transaction can proceed
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Code Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-body font-semibold mb-2">Merchant Profile JSON</h4>
          <CodeBlock code={JSON.stringify(merchantProfile, null, 2)} language="json" />
        </div>
        <div>
          <h4 className="text-body font-semibold mb-2">Agent Profile JSON</h4>
          <CodeBlock code={JSON.stringify(agentProfile, null, 2)} language="json" />
        </div>
      </div>
    </Card>
  )
}
