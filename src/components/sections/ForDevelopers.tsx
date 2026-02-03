import Section from '../shared/Section'
import Card from '../shared/Card'
import CodeBlock from '../shared/CodeBlock'
import { Code, CheckSquare, BookOpen } from 'lucide-react'

export default function ForDevelopers() {
  const platformDiscovery = `// Fetch merchant's UCP profile
const response = await fetch('https://merchant.example/.well-known/ucp');
const profile = await response.json();

// Check supported capabilities
const hasCheckout = profile.ucp.capabilities.some(
  c => c.name === 'dev.ucp.shopping.checkout'
);`

  const createCheckout = `// Include your agent profile URL
const headers = {
  'Content-Type': 'application/json',
  'UCP-Agent': 'profile="https://platform.example/profiles/shopping-agent.json"'
};

const checkout = await fetch('https://merchant.example/api/checkout-sessions', {
  method: 'POST',
  headers,
  body: JSON.stringify({
    line_items: [{
      item: { id: 'sku_999' },
      quantity: 1
    }],
    buyer: {
      email: 'jane@example.com'
    }
  })
});`

  const stateMachine = `const session = await checkout.json();

switch(session.status) {
  case 'incomplete':
    // Collect missing info (address, etc)
    await updateCheckout(session.id, { fulfillment: {...} });
    break;

  case 'requires_escalation':
    // Show continue_url to user
    const continueLink = session.links.find(l => l.type === 'continue');
    redirectUser(continueLink.url);
    break;

  case 'ready_for_complete':
    // Finalize transaction
    await completeCheckout(session.id, { payment: {...} });
    break;
}`

  const merchantProfile = `// Serve at /.well-known/ucp
{
  "ucp": {
    "version": "2026-01-11",
    "services": {
      "dev.ucp.shopping": {
        "rest": {
          "base_url": "https://api.yourstore.com",
          "endpoint": "/api/v1"
        }
      }
    },
    "capabilities": [
      {"name": "dev.ucp.shopping.checkout", "version": "2026-01-11"}
    ]
  }
}`

  const merchantImplementation = `@app.post("/api/v1/checkout-sessions")
async def create_checkout(request: CheckoutRequest):
    # Validate against UCP schema
    # Create internal checkout session
    # Return UCP-compliant response
    return {
        "id": checkout_id,
        "status": "incomplete",
        "ucp": {
            "version": "2026-01-11",
            "capabilities": [...]
        },
        "line_items": [...],
        "totals": [...]
    }`

  return (
    <Section id="for-developers" background="white">
      <h2 className="text-h2 mb-6 text-center">For Developers: Get Started with UCP</h2>

      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-body-lg text-center text-medium-gray">
          Whether you're building a platform that uses UCP or a merchant implementing UCP, here's your roadmap
        </p>
      </div>

      {/* Platform Quick Start */}
      <div className="mb-16">
        <Card className="border-2 border-agent-purple/20">
          <div className="flex items-start gap-4 mb-6">
            <Code className="text-agent-purple" size={48} />
            <div>
              <h3 className="text-h3 mb-2">For Platforms (AI Agents, Apps)</h3>
              <p className="text-body text-medium-gray">
                Integrate UCP to enable commerce across any merchant
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-h4 mb-3">Step 1: Understand Discovery</h4>
              <CodeBlock code={platformDiscovery} language="javascript" />
            </div>

            <div>
              <h4 className="text-h4 mb-3">Step 2: Create a Checkout Session</h4>
              <CodeBlock code={createCheckout} language="javascript" />
            </div>

            <div>
              <h4 className="text-h4 mb-3">Step 3: Handle State Machine</h4>
              <CodeBlock code={stateMachine} language="javascript" />
            </div>
          </div>
        </Card>
      </div>

      {/* Merchant Quick Start */}
      <div className="mb-16">
        <Card className="border-2 border-merchant-teal/20">
          <div className="flex items-start gap-4 mb-6">
            <Code className="text-merchant-teal" size={48} />
            <div>
              <h3 className="text-h3 mb-2">For Merchants (Businesses)</h3>
              <p className="text-body text-medium-gray">
                Implement UCP to reach all compatible platforms
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-h4 mb-3">Step 1: Publish Your Profile</h4>
              <CodeBlock code={merchantProfile} language="json" />
            </div>

            <div>
              <h4 className="text-h4 mb-3">Step 2: Implement Checkout Operations</h4>
              <CodeBlock code={merchantImplementation} language="python" />
            </div>
          </div>
        </Card>
      </div>

      {/* Implementation Checklists */}
      <div className="mb-16">
        <h3 className="text-h3 mb-8 text-center">Implementation Checklists</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Platform Checklist */}
          <Card>
            <div className="flex items-start gap-4 mb-6">
              <CheckSquare className="text-agent-purple" size={32} />
              <h4 className="text-h4">Platform Implementation</h4>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="text-body font-semibold mb-2">Discovery & Profiles</h5>
                <ul className="space-y-2 text-body-sm">
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Publish agent profile at stable URL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Implement profile caching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Validate merchant profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Compute capability intersection</span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-body font-semibold mb-2">Checkout Operations</h5>
                <ul className="space-y-2 text-body-sm">
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Implement all checkout operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Handle idempotency keys correctly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Process UCP error messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Support escalation flow</span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-body font-semibold mb-2">Payment Handling</h5>
                <ul className="space-y-2 text-body-sm">
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Integrate payment credential providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Implement handler execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Never expose raw credentials</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Merchant Checklist */}
          <Card>
            <div className="flex items-start gap-4 mb-6">
              <CheckSquare className="text-merchant-teal" size={32} />
              <h4 className="text-h4">Merchant Implementation</h4>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="text-body font-semibold mb-2">Profile Management</h5>
                <ul className="space-y-2 text-body-sm">
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Serve profile at /.well-known/ucp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Declare accurate capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>List supported payment handlers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Keep profile updated</span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-body font-semibold mb-2">Checkout Implementation</h5>
                <ul className="space-y-2 text-body-sm">
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Implement all required operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Return proper UCP schemas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Calculate totals dynamically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Validate input data</span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-body font-semibold mb-2">Payment Processing</h5>
                <ul className="space-y-2 text-body-sm">
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Integrate with your PSP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Implement tokenization handlers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Handle authorization properly</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Resources */}
      <div>
        <Card className="bg-protocol-blue text-white border-none">
          <div className="flex items-start gap-4 mb-6">
            <BookOpen size={48} />
            <div>
              <h3 className="text-h3 mb-2">Official Resources</h3>
              <p className="text-body opacity-90">
                Everything you need to get started with UCP
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-body font-semibold mb-3">Specifications</h4>
              <ul className="space-y-2 text-body-sm">
                <li><a href="https://ucp.dev" target="_blank" rel="noopener noreferrer" className="hover:underline">UCP Official Site →</a></li>
                <li><a href="https://ucp.dev/specification/overview/" target="_blank" rel="noopener noreferrer" className="hover:underline">Technical Specification →</a></li>
                <li><a href="https://ucp.dev/specification/reference/" target="_blank" rel="noopener noreferrer" className="hover:underline">Schema Reference →</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-body font-semibold mb-3">GitHub</h4>
              <ul className="space-y-2 text-body-sm">
                <li><a href="https://github.com/ucp-protocol/ucp" target="_blank" rel="noopener noreferrer" className="hover:underline">UCP Spec →</a></li>
                <li><a href="https://github.com/ucp-protocol/python-sdk" target="_blank" rel="noopener noreferrer" className="hover:underline">Python SDK →</a></li>
                <li><a href="https://github.com/ucp-protocol/node-sdk" target="_blank" rel="noopener noreferrer" className="hover:underline">Node.js SDK →</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-body font-semibold mb-3">Related Protocols</h4>
              <ul className="space-y-2 text-body-sm">
                <li><a href="https://ap2-protocol.org" target="_blank" rel="noopener noreferrer" className="hover:underline">AP2 Protocol →</a></li>
                <li><a href="https://a2a.dev" target="_blank" rel="noopener noreferrer" className="hover:underline">Agent2Agent →</a></li>
                <li><a href="https://modelcontextprotocol.org" target="_blank" rel="noopener noreferrer" className="hover:underline">MCP →</a></li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
