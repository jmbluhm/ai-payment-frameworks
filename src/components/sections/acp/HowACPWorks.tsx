import Section from '../../shared/Section'
import Card from '../../shared/Card'
import ACPFlowStepper from '../../interactive/ACPFlowStepper'
import SPTVisualizer from '../../interactive/SPTVisualizer'
import { Bot, Building2, CreditCard, User } from 'lucide-react'

export default function HowACPWorks() {
  return (
    <Section id="how-acp-works" background="gray">
      <h2 className="text-h2 mb-6 text-center">How ACP Works: Four-Step Checkout Flow</h2>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-body-lg text-center text-medium-gray">
          ACP enables seamless commerce through a simple, standardized checkout process
        </p>
      </div>

      {/* Interactive Tools First */}
      <div className="mb-16">
        <ACPFlowStepper />
      </div>

      <div className="mb-20">
        <SPTVisualizer />
      </div>

      {/* Key Actors */}
      <div className="mb-20">
        <h3 className="text-h3 mb-8 text-center">The ACP Ecosystem Players</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hover className="border-2 border-protocol-blue/20">
            <User className="text-protocol-blue mb-4" size={40} />
            <h4 className="text-h4 mb-3">Buyer (User) 👤</h4>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Uses AI agent to discover and purchase</li>
              <li>• Saves payment methods in AI platform</li>
              <li>• Maintains purchase history across agents</li>
              <li>• Controls spending limits and permissions</li>
            </ul>
          </Card>

          <Card hover className="border-2 border-agent-purple/20">
            <Bot className="text-agent-purple mb-4" size={40} />
            <h4 className="text-h4 mb-3">AI Agent (Platform) 🤖</h4>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• ChatGPT, Claude, Gemini, etc.</li>
              <li>• Discovers products via merchant feeds</li>
              <li>• Orchestrates checkout experience</li>
              <li>• Creates Shared Payment Tokens</li>
              <li>• Never handles raw payment credentials</li>
            </ul>
          </Card>

          <Card hover className="border-2 border-merchant-teal/20">
            <Building2 className="text-merchant-teal mb-4" size={40} />
            <h4 className="text-h4 mb-3">Merchant (Business) 🏪</h4>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Shopify store, Etsy shop, direct brand</li>
              <li>• Provides product catalog</li>
              <li>• Implements ACP endpoints</li>
              <li>• Processes payments via their PSP</li>
              <li>• Remains merchant of record</li>
              <li>• Controls fulfillment and customer service</li>
            </ul>
          </Card>

          <Card hover className="border-2 border-[#635BFF]/20">
            <CreditCard className="text-[#635BFF] mb-4" size={40} />
            <h4 className="text-h4 mb-3">Payment Service Provider 💳</h4>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Stripe (primary), others coming</li>
              <li>• Issues Shared Payment Tokens</li>
              <li>• Validates token constraints</li>
              <li>• Processes actual payment</li>
              <li>• Provides fraud detection</li>
              <li>• Ensures PCI compliance</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* SPT Deep Dive */}
      <div>
        <h3 className="text-h3 mb-8 text-center">Shared Payment Tokens: The Security Innovation</h3>

        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-body text-center text-medium-gray">
            A Shared Payment Token is a temporary, constrained payment credential that allows secure transactions without exposing underlying payment methods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-[#635BFF]/10 border-[#635BFF]/20">
            <h4 className="text-h4 mb-3">Scoped</h4>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Tied to specific merchant</li>
              <li>• Limited to exact amount</li>
              <li>• Single-use only</li>
            </ul>
          </Card>

          <Card className="bg-[#10A37F]/10 border-[#10A37F]/20">
            <h4 className="text-h4 mb-3">Time-Constrained</h4>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Expires in minutes (typically 15)</li>
              <li>• Prevents replay attacks</li>
              <li>• Automatic cleanup</li>
            </ul>
          </Card>

          <Card className="bg-warning-amber/10 border-warning-amber/20">
            <h4 className="text-h4 mb-3">Fraud-Aware</h4>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Includes Stripe Radar signals</li>
              <li>• Device fingerprinting data</li>
              <li>• Transaction risk assessment</li>
              <li>• Merchant can evaluate before charging</li>
            </ul>
          </Card>

          <Card className="bg-merchant-teal/10 border-merchant-teal/20">
            <h4 className="text-h4 mb-3">Interoperable</h4>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Works with network tokenization</li>
              <li>• Compatible with existing PSP infrastructure</li>
              <li>• Can be forwarded to other processors</li>
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  )
}
