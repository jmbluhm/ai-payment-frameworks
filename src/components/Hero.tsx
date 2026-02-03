import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import Button from './shared/Button'

interface Node {
  id: string
  x: number
  y: number
  label: string
  color: string
}

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    const width = svgRef.current.clientWidth
    const height = svgRef.current.clientHeight

    // Clear any existing content
    svg.selectAll('*').remove()

    // Define nodes
    const nodes: Node[] = [
      { id: 'platform', x: width * 0.2, y: height * 0.3, label: 'Platform', color: '#8B5CF6' },
      { id: 'business', x: width * 0.8, y: height * 0.3, label: 'Business', color: '#14B8A6' },
      { id: 'payment', x: width * 0.8, y: height * 0.7, label: 'Payment', color: '#FB923C' },
      { id: 'user', x: width * 0.2, y: height * 0.7, label: 'User', color: '#0066FF' },
    ]

    // Define connections
    const links = [
      { source: nodes[0], target: nodes[1] },
      { source: nodes[1], target: nodes[2] },
      { source: nodes[2], target: nodes[3] },
      { source: nodes[3], target: nodes[0] },
      { source: nodes[0], target: nodes[2] },
      { source: nodes[1], target: nodes[3] },
    ]

    // Draw connections
    const linkGroup = svg.append('g')

    links.forEach((link, i) => {
      linkGroup
        .append('line')
        .attr('x1', link.source.x)
        .attr('y1', link.source.y)
        .attr('x2', link.target.x)
        .attr('y2', link.target.y)
        .attr('stroke', '#0066FF')
        .attr('stroke-width', 2)
        .attr('stroke-opacity', 0.3)
        .attr('stroke-dasharray', '5,5')
        .style('animation', `dash 20s linear infinite ${i * 3}s`)
    })

    // Add CSS animation for dashed lines
    const style = document.createElement('style')
    style.textContent = `
      @keyframes dash {
        to {
          stroke-dashoffset: -1000;
        }
      }
    `
    document.head.appendChild(style)

    // Draw nodes
    const nodeGroup = svg.append('g')

    nodes.forEach((node) => {
      const group = nodeGroup.append('g')
        .attr('transform', `translate(${node.x}, ${node.y})`)

      // Outer pulsing circle
      group
        .append('circle')
        .attr('r', 40)
        .attr('fill', node.color)
        .attr('opacity', 0.2)
        .style('animation', 'pulse 2s ease-in-out infinite')

      // Inner circle
      group
        .append('circle')
        .attr('r', 25)
        .attr('fill', node.color)
        .attr('opacity', 0.8)

      // Label
      group
        .append('text')
        .attr('y', 50)
        .attr('text-anchor', 'middle')
        .attr('fill', 'white')
        .attr('font-size', '12px')
        .attr('font-weight', '600')
        .text(node.label)
    })

    // Add pulse animation
    const pulseStyle = document.createElement('style')
    pulseStyle.textContent = `
      @keyframes pulse {
        0%, 100% {
          r: 40;
          opacity: 0.2;
        }
        50% {
          r: 50;
          opacity: 0.1;
        }
      }
    `
    document.head.appendChild(pulseStyle)

    return () => {
      document.head.removeChild(style)
      document.head.removeChild(pulseStyle)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-[#1a1f3a] to-agent-purple"
    >
      {/* Animated Background */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ minHeight: '100vh' }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-h1 md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            The Universal Commerce Protocol
          </h1>

          <motion.h2
            className="text-h3 md:text-4xl text-white/90 mb-4 font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The open standard for AI agents to transact with any merchant
          </motion.h2>

          <motion.p
            className="text-body-lg md:text-xl text-white/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            One integration. Every agent. Every platform.
          </motion.p>

          <motion.p
            className="text-body md:text-lg text-white/70 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Co-developed by Shopify and Google with 20+ industry partners
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              onClick={() => {
                const element = document.getElementById('what-is-ucp')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Learn More
            </Button>
            <Button
              variant="secondary"
              className="!bg-white/10 !border-white !text-white hover:!bg-white hover:!text-protocol-blue"
              onClick={() => window.open('https://github.com/ucp-protocol/ucp', '_blank')}
            >
              GitHub Repository
            </Button>
            <Button
              variant="secondary"
              className="!bg-white/10 !border-white !text-white hover:!bg-white hover:!text-protocol-blue"
              onClick={() => {
                const element = document.getElementById('how-it-works')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Try Interactive Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
