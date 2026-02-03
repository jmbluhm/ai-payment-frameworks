import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home } from 'lucide-react'

interface NavigationProps {
  activeSection?: string
}

interface NavItem {
  id: string
  label: string
  divider?: boolean
}

const ucpNavItems: NavItem[] = [
  { id: 'what-is-ucp', label: 'What is UCP' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'payment-model', label: 'Payments' },
  { id: 'for-developers', label: 'Developers' },
  { id: 'ecosystem', label: 'Ecosystem' },
]

const acpNavItems: NavItem[] = [
  { id: 'what-is-acp', label: 'What is ACP' },
  { id: 'how-acp-works', label: 'How It Works' },
  { id: 'acp-ecosystem', label: 'Ecosystem' },
]

export default function Navigation({ activeSection = '' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setIsMobileMenuOpen(false)
  }

  const isHomePage = location.pathname === '/'
  const isUCPPage = location.pathname === '/ucp'
  const isACPPage = location.pathname === '/acp'
  const isComparePage = location.pathname === '/compare'

  const navItems = isUCPPage ? ucpNavItems : isACPPage ? acpNavItems : []

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isHomePage
            ? 'bg-white shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-bold text-protocol-blue focus:outline-none focus:ring-2 focus:ring-protocol-blue rounded hover:opacity-80 transition-opacity"
            >
              AI Commerce Protocols
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Page-level navigation for home or compare page */}
              {(isHomePage || isComparePage) && (
                <>
                  <Link
                    to="/ucp"
                    className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                      isScrolled || isHomePage
                        ? 'text-dark hover:text-protocol-blue hover:bg-protocol-blue/5'
                        : 'text-white hover:text-protocol-blue hover:bg-white/10'
                    }`}
                  >
                    UCP
                  </Link>
                  <Link
                    to="/acp"
                    className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                      isScrolled || isHomePage
                        ? 'text-dark hover:text-[#635BFF] hover:bg-[#635BFF]/5'
                        : 'text-white hover:text-[#635BFF] hover:bg-white/10'
                    }`}
                  >
                    ACP
                  </Link>
                  <Link
                    to="/compare"
                    className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                      isScrolled || isHomePage
                        ? 'text-dark hover:text-protocol-blue hover:bg-protocol-blue/5'
                        : 'text-white hover:text-protocol-blue hover:bg-white/10'
                    }`}
                  >
                    Compare
                  </Link>
                </>
              )}

              {/* Section navigation for UCP or ACP page */}
              {(isUCPPage || isACPPage) && (
                <>
                  <button
                    onClick={scrollToTop}
                    className={`px-4 py-2 text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-protocol-blue ${
                      isScrolled
                        ? 'text-dark hover:text-protocol-blue hover:bg-protocol-blue/5'
                        : 'text-white hover:text-protocol-blue hover:bg-white/10'
                    }`}
                  >
                    Overview
                  </button>
                  {navItems.map((item) => (
                    <div key={item.id} className="flex items-center">
                      {item.divider && (
                        <div className={`w-px h-6 mx-2 ${isScrolled ? 'bg-light-gray' : 'bg-white/20'}`} />
                      )}
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`px-4 py-2 text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 ${
                          isUCPPage ? 'focus:ring-protocol-blue' : 'focus:ring-[#635BFF]'
                        } ${
                          activeSection === item.id
                            ? isUCPPage
                              ? 'text-protocol-blue bg-protocol-blue/10'
                              : 'text-[#635BFF] bg-[#635BFF]/10'
                            : isScrolled
                            ? `text-dark hover:bg-opacity-5 ${
                                isUCPPage ? 'hover:text-protocol-blue hover:bg-protocol-blue/5' : 'hover:text-[#635BFF] hover:bg-[#635BFF]/5'
                              }`
                            : `text-white hover:bg-white/10 ${
                                isUCPPage ? 'hover:text-protocol-blue' : 'hover:text-[#635BFF]'
                              }`
                        }`}
                      >
                        {item.label}
                      </button>
                    </div>
                  ))}
                  {/* Quick link to other protocol */}
                  <div className={`w-px h-6 mx-2 ${isScrolled ? 'bg-light-gray' : 'bg-white/20'}`} />
                  <Link
                    to={isUCPPage ? '/acp' : '/ucp'}
                    className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                      isScrolled
                        ? 'text-dark hover:text-protocol-blue hover:bg-protocol-blue/5'
                        : 'text-white hover:text-protocol-blue hover:bg-white/10'
                    }`}
                  >
                    {isUCPPage ? 'View ACP' : 'View UCP'}
                  </Link>
                  <Link
                    to="/compare"
                    className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                      isScrolled
                        ? 'text-dark hover:text-protocol-blue hover:bg-protocol-blue/5'
                        : 'text-white hover:text-protocol-blue hover:bg-white/10'
                    }`}
                  >
                    Compare
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-protocol-blue ${
                isScrolled || isHomePage ? 'text-dark' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-dark/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="container mx-auto px-6 py-4">
              {/* Home link */}
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 w-full text-left px-4 py-3 text-body rounded transition-colors text-dark hover:text-protocol-blue hover:bg-protocol-blue/5 mb-2"
              >
                <Home size={18} />
                Home
              </Link>

              {/* Page-level navigation */}
              {(isHomePage || isComparePage) && (
                <>
                  <Link
                    to="/ucp"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-body rounded transition-colors text-dark hover:text-protocol-blue hover:bg-protocol-blue/5"
                  >
                    UCP
                  </Link>
                  <Link
                    to="/acp"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-body rounded transition-colors text-dark hover:text-[#635BFF] hover:bg-[#635BFF]/5"
                  >
                    ACP
                  </Link>
                  <Link
                    to="/compare"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-body rounded transition-colors text-dark hover:text-protocol-blue hover:bg-protocol-blue/5"
                  >
                    Compare
                  </Link>
                </>
              )}

              {/* Section navigation */}
              {(isUCPPage || isACPPage) && (
                <>
                  <button
                    onClick={scrollToTop}
                    className="block w-full text-left px-4 py-3 text-body rounded transition-colors text-dark hover:text-protocol-blue hover:bg-protocol-blue/5"
                  >
                    Overview
                  </button>
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 text-body rounded transition-colors focus:outline-none ${
                        activeSection === item.id
                          ? isUCPPage
                            ? 'text-protocol-blue bg-protocol-blue/10 font-semibold'
                            : 'text-[#635BFF] bg-[#635BFF]/10 font-semibold'
                          : isUCPPage
                          ? 'text-dark hover:text-protocol-blue hover:bg-protocol-blue/5'
                          : 'text-dark hover:text-[#635BFF] hover:bg-[#635BFF]/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="border-t border-light-gray my-2" />
                  <Link
                    to={isUCPPage ? '/acp' : '/ucp'}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-body rounded transition-colors text-dark hover:text-protocol-blue hover:bg-protocol-blue/5"
                  >
                    {isUCPPage ? 'View ACP' : 'View UCP'}
                  </Link>
                  <Link
                    to="/compare"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-body rounded transition-colors text-dark hover:text-protocol-blue hover:bg-protocol-blue/5"
                  >
                    Compare
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
