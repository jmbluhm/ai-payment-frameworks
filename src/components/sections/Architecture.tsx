import Section from '../shared/Section'
import Card from '../shared/Card'
import CodeBlock from '../shared/CodeBlock'
import { Layers, Network, FileCode, Shield } from 'lucide-react'

export default function Architecture() {
  const extensionComposition = `{
  "name": "dev.ucp.shopping.fulfillment",
  "extends": "dev.ucp.shopping.checkout",
  "schema": {
    "$defs": {
      "checkout": {
        "allOf": [
          {"$ref": "checkout.json"},
          {
            "properties": {
              "fulfillment": {
                "methods": [...],
                "expectations": [...]
              }
            }
          }
        ]
      }
    }
  }
}`

  return (
    <Section id="architecture" background="white">
      <h2 className="text-h2 mb-6 text-center">Architecture: Layered & Composable</h2>

      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-body-lg text-center text-medium-gray">
          UCP follows the TCP/IP model: thoughtfully separate concerns, define clear boundaries, enable composition.
        </p>
      </div>

      {/* Layered Design */}
      <div className="mb-16">
        <Card className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Layers className="text-protocol-blue" size={48} />
            <div>
              <h3 className="text-h3 mb-2">The Protocol Stack</h3>
              <p className="text-body text-medium-gray">
                Four distinct layers work together to provide flexibility and evolution
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-protocol-blue/10 border-2 border-protocol-blue/30 rounded-lg p-6">
              <div className="text-2xl mb-3">🔷</div>
              <h4 className="text-h4 mb-2">Layer 1: Services</h4>
              <p className="text-body-sm text-medium-gray mb-3">
                Define broad domains (Shopping, Travel, Finance)
              </p>
              <code className="text-xs bg-protocol-blue/20 px-2 py-1 rounded">dev.ucp.shopping</code>
            </div>

            <div className="bg-agent-purple/10 border-2 border-agent-purple/30 rounded-lg p-6">
              <div className="text-2xl mb-3">🟣</div>
              <h4 className="text-h4 mb-2">Layer 2: Capabilities</h4>
              <p className="text-body-sm text-medium-gray mb-3">
                Core functional areas within a service
              </p>
              <code className="text-xs bg-agent-purple/20 px-2 py-1 rounded">checkout</code>
            </div>

            <div className="bg-merchant-teal/10 border-2 border-merchant-teal/30 rounded-lg p-6">
              <div className="text-2xl mb-3">🔶</div>
              <h4 className="text-h4 mb-2">Layer 3: Extensions</h4>
              <p className="text-body-sm text-medium-gray mb-3">
                Optional augmentations via composition
              </p>
              <code className="text-xs bg-merchant-teal/20 px-2 py-1 rounded">fulfillment</code>
            </div>

            <div className="bg-payment-orange/10 border-2 border-payment-orange/30 rounded-lg p-6">
              <div className="text-2xl mb-3">🟠</div>
              <h4 className="text-h4 mb-2">Layer 4: Transport</h4>
              <p className="text-body-sm text-medium-gray mb-3">
                Multiple concrete implementations
              </p>
              <code className="text-xs bg-payment-orange/20 px-2 py-1 rounded">REST, MCP, A2A</code>
            </div>
          </div>
        </Card>
      </div>

      {/* Transport Bindings */}
      <div className="mb-16">
        <Card>
          <div className="flex items-start gap-4 mb-6">
            <Network className="text-protocol-blue" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Transport Options: Choose Your Channel</h3>
              <p className="text-body text-medium-gray">
                UCP is transport-agnostic, working over multiple protocols
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-light-gray rounded-lg p-6 hover:border-protocol-blue transition-colors">
              <h4 className="text-h4 mb-3">REST / HTTP+JSON</h4>
              <p className="text-body-sm text-medium-gray mb-3">Classic API approach with universal compatibility</p>
              <ul className="space-y-2 text-body-sm">
                <li>• Universal compatibility</li>
                <li>• OpenAPI specifications</li>
                <li>• Standard HTTP methods</li>
              </ul>
            </div>

            <div className="border-2 border-light-gray rounded-lg p-6 hover:border-agent-purple transition-colors">
              <h4 className="text-h4 mb-3">Model Context Protocol (MCP)</h4>
              <p className="text-body-sm text-medium-gray mb-3">For LLM-based agents with JSON-RPC 2.0</p>
              <ul className="space-y-2 text-body-sm">
                <li>• Native agent actions</li>
                <li>• Tool-based interface</li>
                <li>• Optimized for LLMs</li>
              </ul>
            </div>

            <div className="border-2 border-light-gray rounded-lg p-6 hover:border-merchant-teal transition-colors">
              <h4 className="text-h4 mb-3">Agent2Agent (A2A)</h4>
              <p className="text-body-sm text-medium-gray mb-3">Direct agent-to-agent communication</p>
              <ul className="space-y-2 text-body-sm">
                <li>• Structured messaging</li>
                <li>• No HTTP overhead</li>
                <li>• Autonomous interactions</li>
              </ul>
            </div>

            <div className="border-2 border-light-gray rounded-lg p-6 hover:border-payment-orange transition-colors">
              <h4 className="text-h4 mb-3">Embedded Protocol (EP)</h4>
              <p className="text-body-sm text-medium-gray mb-3">Web-based UI in iframe/webview</p>
              <ul className="space-y-2 text-body-sm">
                <li>• Bidirectional messaging</li>
                <li>• Custom merchant UI</li>
                <li>• Context passing</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Schema Composition */}
      <div className="mb-16">
        <Card>
          <div className="flex items-start gap-4 mb-6">
            <FileCode className="text-protocol-blue" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Schema Composition: How Extensions Work</h3>
              <p className="text-body text-medium-gray">
                Extensions use JSON Schema's allOf to compose with base capabilities
              </p>
            </div>
          </div>

          <CodeBlock code={extensionComposition} language="json" />

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
              <p className="text-body-sm font-semibold mb-2">Core Stability</p>
              <p className="text-body-sm text-medium-gray">Base schemas remain unchanged</p>
            </div>
            <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
              <p className="text-body-sm font-semibold mb-2">Independent Versioning</p>
              <p className="text-body-sm text-medium-gray">Extensions evolve separately</p>
            </div>
            <div className="bg-success-green/10 border border-success-green/20 rounded p-4">
              <p className="text-body-sm font-semibold mb-2">Multiple Extensions</p>
              <p className="text-body-sm text-medium-gray">Can be active simultaneously</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Security Model */}
      <div>
        <Card>
          <div className="flex items-start gap-4 mb-6">
            <Shield className="text-success-green" size={48} />
            <div>
              <h3 className="text-h3 mb-2">Security: Built-In, Not Bolted-On</h3>
              <p className="text-body text-medium-gray">
                Security is fundamental to every layer of UCP
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-h4 mb-3 text-success-green">Transport Security</h4>
              <ul className="space-y-2 text-body-sm">
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>HTTPS required (TLS 1.2+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Certificate validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>No plaintext credentials</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-h4 mb-3 text-success-green">Authentication</h4>
              <ul className="space-y-2 text-body-sm">
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>OAuth 2.0 for identity linking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Bearer tokens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Short-lived with refresh</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-h4 mb-3 text-success-green">Request Integrity</h4>
              <ul className="space-y-2 text-body-sm">
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Idempotency keys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Request signatures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Replay attack prevention</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-h4 mb-3 text-success-green">Payment Security</h4>
              <ul className="space-y-2 text-body-sm">
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Tokenization prevents exposure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>PCI compliance via handlers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  <span>Cryptographic mandates (AP2)</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
