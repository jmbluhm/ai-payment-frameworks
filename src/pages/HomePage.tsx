import { Link } from 'react-router-dom'
import { ArrowRight, Code, ShoppingCart } from 'lucide-react'
import Card from '../components/shared/Card'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-protocol-blue via-agent-purple to-merchant-teal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/20" />

        <div className="relative z-10 container mx-auto px-6 max-w-6xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            The Future of AI Commerce
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Explore the open standards enabling seamless transactions between AI agents and merchants
          </p>

          {/* Protocol Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* UCP Card */}
            <Card className="text-left hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-protocol-blue" size={32} />
                <h2 className="text-h2">UCP</h2>
              </div>
              <h3 className="text-h4 text-protocol-blue mb-3">Universal Commerce Protocol</h3>
              <p className="text-body text-medium-gray mb-6">
                A comprehensive, extensible framework for AI agents to discover, negotiate capabilities, and transact with any merchant. Built for flexibility and scale.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-body-sm text-medium-gray">
                  <span className="font-semibold text-dark">Founded by:</span> Shopify + Google
                </p>
                <p className="text-body-sm text-medium-gray">
                  <span className="font-semibold text-dark">Launched:</span> January 11, 2025
                </p>
                <p className="text-body-sm text-medium-gray">
                  <span className="font-semibold text-dark">Best for:</span> Complex commerce, custom integrations
                </p>
              </div>
              <Link
                to="/ucp"
                className="inline-flex items-center gap-2 px-6 py-3 bg-protocol-blue text-white rounded-button font-semibold hover:bg-protocol-blue/90 transition-colors"
              >
                Explore UCP
                <ArrowRight size={20} />
              </Link>
            </Card>

            {/* ACP Card */}
            <Card className="text-left hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="text-[#635BFF]" size={32} />
                <h2 className="text-h2">ACP</h2>
              </div>
              <h3 className="text-h4 text-[#635BFF] mb-3">Agentic Commerce Protocol</h3>
              <p className="text-body text-medium-gray mb-6">
                A checkout-first approach with Shared Payment Tokens (SPT) for secure, streamlined AI-powered purchasing. Simple and fast integration.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-body-sm text-medium-gray">
                  <span className="font-semibold text-dark">Founded by:</span> OpenAI + Stripe
                </p>
                <p className="text-body-sm text-medium-gray">
                  <span className="font-semibold text-dark">Launched:</span> September 2025
                </p>
                <p className="text-body-sm text-medium-gray">
                  <span className="font-semibold text-dark">Best for:</span> Quick checkout, payment security
                </p>
              </div>
              <Link
                to="/acp"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#635BFF] text-white rounded-button font-semibold hover:bg-[#635BFF]/90 transition-colors"
              >
                Explore ACP
                <ArrowRight size={20} />
              </Link>
            </Card>
          </div>

          {/* Compare Link */}
          <div className="mt-8">
            <Link
              to="/compare"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark rounded-button font-semibold hover:bg-white/90 transition-colors text-lg"
            >
              Compare Protocols Side-by-Side
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Open Standards Section */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-h2 mb-6 text-center">Why Open Standards Matter</h2>
          <p className="text-body-lg text-center text-medium-gray mb-12 max-w-3xl mx-auto">
            Both UCP and ACP are open, community-driven standards that solve the N×N integration problem in AI commerce
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-h4 mb-3">Integrate Once</h3>
              <p className="text-body text-medium-gray">
                Build to a standard, not to every platform. Reach all compatible AI agents and merchants.
              </p>
            </Card>

            <Card>
              <h3 className="text-h4 mb-3">No Vendor Lock-In</h3>
              <p className="text-body text-medium-gray">
                Open specifications mean you control your implementation and can switch providers freely.
              </p>
            </Card>

            <Card>
              <h3 className="text-h4 mb-3">Community-Driven</h3>
              <p className="text-body text-medium-gray">
                Built by industry leaders with real-world experience processing billions of transactions.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
