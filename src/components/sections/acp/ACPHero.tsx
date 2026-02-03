import { motion } from 'framer-motion'
import Button from '../../shared/Button'

export default function ACPHero() {
  return (
    <section
      id="acp-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#635BFF] via-[#4A3FCC] to-[#10A37F]"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-h1 md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Agentic Commerce Protocol
          </h1>

          <motion.h2
            className="text-h3 md:text-4xl text-white/90 mb-4 font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The open standard for AI-powered commerce experiences
          </motion.h2>

          <motion.p
            className="text-body-lg md:text-xl text-white/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Turn conversational discovery into seamless transactions.
          </motion.p>

          <motion.p
            className="text-body md:text-lg text-white/70 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Co-developed by OpenAI and Stripe. Powers Instant Checkout in ChatGPT.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              onClick={() => {
                const element = document.getElementById('what-is-acp')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Learn More
            </Button>
            <Button
              variant="secondary"
              className="!bg-white/10 !border-white !text-white hover:!bg-white hover:!text-[#635BFF]"
              onClick={() => window.open('https://stripe.com/agentic-commerce', '_blank')}
            >
              View Specification
            </Button>
            <Button
              variant="secondary"
              className="!bg-white/10 !border-white !text-white hover:!bg-white hover:!text-[#635BFF]"
              onClick={() => {
                const element = document.getElementById('protocol-comparison')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Compare with UCP
            </Button>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-body-sm text-white/70">Launched</div>
              <div className="text-body font-semibold text-white">September 2025</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">💬</div>
              <div className="text-body-sm text-white/70">First Implementation</div>
              <div className="text-body font-semibold text-white">ChatGPT</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🏪</div>
              <div className="text-body-sm text-white/70">Partners</div>
              <div className="text-body font-semibold text-white">1M+ merchants</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🌍</div>
              <div className="text-body-sm text-white/70">Open Source</div>
              <div className="text-body font-semibold text-white">Apache 2.0</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
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
