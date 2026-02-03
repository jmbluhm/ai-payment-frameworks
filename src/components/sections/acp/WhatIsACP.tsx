import Section from '../../shared/Section'
import Card from '../../shared/Card'
import { MessageSquare, Lock, Network, Zap } from 'lucide-react'

export default function WhatIsACP() {
  return (
    <Section id="what-is-acp" background="white">
      <h2 className="text-h2 mb-6 text-center">The Challenge: Commerce in Conversational AI</h2>

      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-body-lg text-center text-medium-gray mb-8">
          As AI agents become shopping assistants, traditional e-commerce assumptions break down
        </p>
      </div>

      {/* The Problem */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-error-red/20">
            <h3 className="text-h4 mb-4 text-error-red">Traditional Commerce</h3>
            <ul className="space-y-2 text-body text-medium-gray">
              <li>• User visits merchant website</li>
              <li>• Merchant controls entire UI/UX</li>
              <li>• Direct payment credential collection</li>
              <li>• Merchant handles all data</li>
            </ul>
          </Card>

          <Card className="border-2 border-success-green/20">
            <h3 className="text-h4 mb-4 text-success-green">Agentic Commerce</h3>
            <ul className="space-y-2 text-body text-medium-gray">
              <li>• User stays in AI interface</li>
              <li>• AI agent orchestrates experience</li>
              <li>• Payment credentials never exposed</li>
              <li>• Trust must be explicitly programmed</li>
            </ul>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card hover className="border-2 border-[#635BFF]/20">
            <Lock className="text-[#635BFF] mb-4" size={32} />
            <h3 className="text-h4 mb-2">Credential Security</h3>
            <p className="text-body text-medium-gray">
              How do you enable payments without exposing card numbers to AI platforms?
            </p>
          </Card>

          <Card hover className="border-2 border-[#635BFF]/20">
            <MessageSquare className="text-[#635BFF] mb-4" size={32} />
            <h3 className="text-h4 mb-2">Merchant Control</h3>
            <p className="text-body text-medium-gray">
              How do merchants maintain their brand and business logic?
            </p>
          </Card>

          <Card hover className="border-2 border-[#635BFF]/20">
            <Network className="text-[#635BFF] mb-4" size={32} />
            <h3 className="text-h4 mb-2">Standardization</h3>
            <p className="text-body text-medium-gray">
              How do you avoid N×N integrations between AI agents and merchants?
            </p>
          </Card>

          <Card hover className="border-2 border-[#635BFF]/20">
            <Zap className="text-[#635BFF] mb-4" size={32} />
            <h3 className="text-h4 mb-2">Trust Architecture</h3>
            <p className="text-body text-medium-gray">
              How do you prove authorization when an AI makes purchases?
            </p>
          </Card>

          <Card hover className="border-2 border-[#635BFF]/20">
            <Lock className="text-[#635BFF] mb-4" size={32} />
            <h3 className="text-h4 mb-2">Fraud Prevention</h3>
            <p className="text-body text-medium-gray">
              How do you protect against unauthorized agent actions?
            </p>
          </Card>
        </div>
      </div>

      {/* The Solution */}
      <div className="mb-20">
        <h2 className="text-h2 mb-6 text-center">ACP's Approach: A Merchant-Centric Open Standard</h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-body-lg text-center text-medium-gray">
            ACP solves agentic commerce challenges through three key innovations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-[#635BFF]/5 border-2 border-[#635BFF]/20">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-h3 mb-3">Shared Payment Tokens</h3>
            <p className="text-body text-medium-gray mb-4">
              Programmable, time-limited, single-use tokens that:
            </p>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Never expose underlying credentials</li>
              <li>• Scope to specific merchant and amount</li>
              <li>• Include fraud detection signals</li>
              <li>• Work with existing payment infrastructure</li>
            </ul>
          </Card>

          <Card className="bg-[#10A37F]/5 border-2 border-[#10A37F]/20">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-h3 mb-3">Standardized APIs</h3>
            <p className="text-body text-medium-gray mb-4">
              Four core endpoints that let any AI agent:
            </p>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Create checkout sessions</li>
              <li>• Update buyer/fulfillment information</li>
              <li>• Complete transactions securely</li>
              <li>• Cancel when needed</li>
            </ul>
          </Card>

          <Card className="bg-merchant-teal/5 border-2 border-merchant-teal/20">
            <div className="text-4xl mb-4">🏪</div>
            <h3 className="text-h3 mb-3">Merchant-Centric Design</h3>
            <p className="text-body text-medium-gray mb-4">
              Merchants retain full control over:
            </p>
            <ul className="space-y-2 text-body-sm text-medium-gray">
              <li>• Product pricing and availability</li>
              <li>• Business logic and policies</li>
              <li>• Customer relationships</li>
              <li>• Fulfillment processes</li>
              <li>• Payment processing (BYO PSP)</li>
            </ul>
          </Card>
        </div>

        <Card className="bg-[#635BFF] text-white border-none">
          <h3 className="text-h3 mb-4">Key Principle</h3>
          <p className="text-body-lg">
            Merchants remain the merchant of record. AI agents facilitate, but don't intermediate.
          </p>
        </Card>
      </div>

      {/* Design Principles */}
      <div>
        <h2 className="text-h2 mb-6 text-center">ACP's Core Design Philosophy</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hover>
            <h3 className="text-h4 mb-3">Open & Interoperable</h3>
            <ul className="space-y-2 text-body text-medium-gray">
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Apache 2.0 licensed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Works with any AI agent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Compatible with any payment processor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Community-driven governance</span>
              </li>
            </ul>
          </Card>

          <Card hover>
            <h3 className="text-h4 mb-3">Business-Friendly</h3>
            <ul className="space-y-2 text-body text-medium-gray">
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Minimal integration lift</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Merchants control brand experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>No forced intermediation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Direct customer relationships</span>
              </li>
            </ul>
          </Card>

          <Card hover>
            <h3 className="text-h4 mb-3">Secure by Design</h3>
            <ul className="space-y-2 text-body text-medium-gray">
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Tokenized payments (no credential exposure)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Fraud signals included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>PCI compliance simplified</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Time and amount constraints</span>
              </li>
            </ul>
          </Card>

          <Card hover>
            <h3 className="text-h4 mb-3">Flexible & Extensible</h3>
            <ul className="space-y-2 text-body text-medium-gray">
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Supports physical and digital goods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Handles subscriptions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Accommodates complex fulfillment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success-green">✓</span>
                <span>Custom merchant capabilities</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  )
}
