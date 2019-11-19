import React, {
  FunctionComponent,
  MouseEventHandler,
  CSSProperties,
  ReactNode,
  ReactChildren
} from 'react'
import classnames from 'classnames'
import Spin from 'teak-ui/Spin'

import './index.scss'

export type ButtonType = 'default' | 'primary' | 'inverse' | 'danger'

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'

export type ButtonShape = 'square' | 'round'

export interface ButtonProps {
  type: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  children?: ReactChildren | string
  onClick?: MouseEventHandler
  disabled?: boolean
  className?: string
  style?: CSSProperties
  nativeType?: 'button' | 'submit' | 'reset'
  icon?: ReactNode
  loading?: boolean
  feedback?: boolean
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
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
    loading = false
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

  return (
    <button
      className={classes}
      disabled={disabled}
      role="button"
      style={style}
      type={nativeType}
      onClick={onClick}
    >
      {loading && <Spin />}
      {typeof children === 'string' ? (
        <span className={`${classPrefix}-text`}>{children}</span>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
