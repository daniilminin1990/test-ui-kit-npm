import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, ReactNode, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'outlined' | 'primary' | 'secondary' | 'text'
} & ComponentPropsWithoutRef<T>

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ButtonPolymorph = <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: any) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,react/react-in-jsx-scope
  return <Component className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)} ref={ref} {...rest} />
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
  props: {
    ref?: ForwardedRef<ElementRef<T>>
  } & ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => ReturnType<typeof ButtonPolymorph>
