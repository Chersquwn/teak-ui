import React, {
  FunctionComponentElement,
  MouseEventHandler,
  CSSProperties,
  ReactNode,
  ReactChildren
} from 'react'
import classnames from 'classnames'

import './index.scss'

export type ButtonType = 'default' | 'primary' | 'inverse' | 'danger'

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'

export type ButtonShape = 'square' | 'round'

export interface ButtonProps {
  type: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  children: ReactChildren | string
  onClick?: MouseEventHandler
  disabled?: boolean
  className?: string
  style?: CSSProperties
  nativeType?: 'button' | 'submit' | 'reset'
  icon?: ReactNode
  loading?: boolean
  feedback?: boolean
}

const Button = (props: ButtonProps): FunctionComponentElement<ButtonProps> => {
  const {
    type = 'default',
    size = 'normal',
    shape,
    onClick,
    children,
    disabled,
    className,
    style,
    nativeType = 'button',
    icon,
    loading = false,
    feedback = false
  } = props
  const classPrefix = 'teak-button'

  const classes = classnames(
    `${classPrefix}`,
    {
      [`${classPrefix}-default`]: type === 'default',
      [`${classPrefix}-primary`]: type === 'primary',
      [`${classPrefix}-inverse`]: type === 'inverse',
      [`${classPrefix}-danger`]: type === 'danger',
      [`${classPrefix}-large`]: size === 'large',
      [`${classPrefix}-normal`]: size === 'normal',
      [`${classPrefix}-small`]: size === 'small',
      [`${classPrefix}-square`]: shape === 'square',
      [`${classPrefix}-round`]: shape === 'round'
    },
    className
  )

  function onTouchStart(e: TouchEvent<HTMLButtonElement>) {}

  function onTouchEnd(e: TouchEvent<HTMLButtonElement>) {}

  return (
    <button
      className={classes}
      disabled={disabled}
      style={style}
      type={nativeType}
      onClick={onClick}
      onTouchEnd={feedback ? onTouchEnd : null}
      onTouchStart={feedback ? onTouchStart : null}
    >
      {typeof children === 'string' ? (
        <span className={`${classPrefix}-text`}>{children}</span>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
