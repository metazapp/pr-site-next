import React from 'react'
import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export default function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  onClick,
  fullWidth = false,
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  // Base styles for all button variants
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center'
  
  // Size-specific styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-8 py-3.5 text-lg',
  }
  
  // Variant-specific styles
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900 shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-800',
    light: 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20',
  }
  
  // Disabled styles
  const disabledStyles = disabled
    ? 'opacity-60 cursor-not-allowed pointer-events-none'
    : ''
  
  // Full width styles
  const widthStyles = fullWidth ? 'w-full' : ''
  
  // Icon styles
  const iconStyles = icon ? 'gap-2' : ''
  
  // Combined styles
  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${widthStyles} ${iconStyles} ${className}`
  
  // Render link or button
  if (href) {
    return (
      <Link href={href} className={combinedStyles} aria-disabled={disabled}>
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </Link>
    )
  }
  
  return (
    <button
      type={type}
      className={combinedStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </button>
  )
}