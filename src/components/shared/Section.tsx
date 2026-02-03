import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  background?: 'white' | 'gray'
}

export default function Section({ id, children, className = '', background = 'white' }: SectionProps) {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-off-white'

  return (
    <motion.section
      id={id}
      className={`${bgClass} py-24 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {children}
      </div>
    </motion.section>
  )
}
