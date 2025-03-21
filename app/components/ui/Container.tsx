import React from 'react'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padding?: boolean
}

export default function Container({
  children,
  className = '',
  as: Component = 'div',
  maxWidth = 'xl',
  padding = true,
}: ContainerProps) {
  
  // Base container styles
  const baseStyles = 'mx-auto'
  
  // Max width styles
  const maxWidthStyles = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-6xl',   // Changed from max-w-xl to max-w-6xl
    '2xl': 'max-w-7xl',
    'full': 'max-w-full',
  }
  
  // Padding styles
  const paddingStyles = padding ? 'px-4 md:px-6' : ''
  
  // Combined styles
  const combinedStyles = `${baseStyles} ${maxWidthStyles[maxWidth]} ${paddingStyles} ${className}`
  
  return (
    <Component className={combinedStyles}>{children}</Component>
  )
}