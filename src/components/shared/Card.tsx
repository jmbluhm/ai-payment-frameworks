import { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false, ...props }: CardProps) {
  return (
    <div
      className={`
        bg-white border border-light-gray rounded-card shadow-card p-6
        ${hover ? 'transition-shadow duration-200 hover:shadow-card-hover' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
