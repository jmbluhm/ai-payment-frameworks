import { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false, ...props }: CardProps) {
  // Check if custom background or border is provided
  const hasCustomBg = className.includes('bg-')
  const hasCustomBorder = className.includes('border-')

  const baseClasses = [
    !hasCustomBg && 'bg-white',
    !hasCustomBorder && 'border border-light-gray',
    'rounded-card shadow-card p-6',
    hover && 'transition-shadow duration-200 hover:shadow-card-hover',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  )
}
