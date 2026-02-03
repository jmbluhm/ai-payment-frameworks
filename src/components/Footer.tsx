import { Github, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-h4 mb-4">Universal Commerce Protocol</h3>
            <p className="text-body text-white/70 mb-4">
              An open standard co-developed by Shopify and Google for AI agents to discover, negotiate, and transact with any merchant.
            </p>
            <p className="text-body-sm text-white/50">
              Launch: January 11, 2026
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-h4 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://ucp.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white/70 hover:text-protocol-blue transition-colors inline-flex items-center gap-2"
                >
                  Official Documentation
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ucp-protocol/ucp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white/70 hover:text-protocol-blue transition-colors inline-flex items-center gap-2"
                >
                  UCP Specification
                  <Github size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://ucp.dev/specification/overview/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white/70 hover:text-protocol-blue transition-colors inline-flex items-center gap-2"
                >
                  Technical Specification
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://ap2-protocol.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white/70 hover:text-protocol-blue transition-colors inline-flex items-center gap-2"
                >
                  Agent Payments Protocol (AP2)
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-h4 mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/ucp-protocol/ucp/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white/70 hover:text-protocol-blue transition-colors inline-flex items-center gap-2"
                >
                  GitHub Discussions
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/ucp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white/70 hover:text-protocol-blue transition-colors inline-flex items-center gap-2"
                >
                  Discord Community
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/questions/tagged/ucp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white/70 hover:text-protocol-blue transition-colors inline-flex items-center gap-2"
                >
                  Stack Overflow
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-body-sm text-white/50">
            © 2026 Universal Commerce Protocol. Open standard maintained by the community.
          </p>
        </div>
      </div>
    </footer>
  )
}
