import React from 'react'

type CardProps = {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'neumorphic' | 'flat'
  hoverEffect?: boolean
  onClick?: () => void
}

export default function Card({ 
  children, 
  className = '', 
  variant = 'default',
  hoverEffect = false,
  onClick
}: CardProps) {
  
  // Base styles for all card variants
  const baseStyles = 'rounded-xl overflow-hidden'
  
  // Variant-specific styles
  const variantStyles: {[key: string]: string} = {
    default: 'bg-white shadow-md',
    elevated: 'bg-white shadow-xl',
    neumorphic: 'bg-gray-50 shadow-[8px_8px_16px_rgba(0,0,0,0.05),-8px_-8px_16px_rgba(255,255,255,0.8)]',
    flat: 'bg-white border border-gray-200',
  }
  
  // Hover effect styles
  const hoverStyles = hoverEffect 
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
    : ''
  
  // Cursor pointer if onClick provided
  const cursorStyles = onClick ? 'cursor-pointer' : ''
  
  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${cursorStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}