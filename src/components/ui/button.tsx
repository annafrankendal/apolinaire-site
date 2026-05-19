import { forwardRef } from 'react'

type ButtonVariant = 'quiet' | 'ghostLine' | 'default'
type ButtonSize = 'editorial' | 'editorialLg' | 'default'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  children?: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  quiet: 'border border-current bg-transparent hover:opacity-80 transition-opacity',
  ghostLine: 'border border-ink bg-transparent hover:bg-ink hover:text-bone transition-colors',
  default: 'bg-ink text-bone hover:bg-ink/90 transition-colors',
}

const sizeClasses: Record<ButtonSize, string> = {
  editorial: 'px-8 py-3 text-xs tracking-widest uppercase',
  editorialLg: 'px-10 py-4 text-xs tracking-widest uppercase',
  default: 'px-6 py-2 text-sm',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', asChild, children, className = '', ...props }, ref) => {
    const classes = `inline-flex items-center justify-center cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    if (asChild && children) {
      const child = children as React.ReactElement<React.AnchorHTMLAttributes<HTMLAnchorElement>>
      return (
        <child.type {...child.props} className={`${classes} ${child.props.className || ''}`} />
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
