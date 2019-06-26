import React, { FunctionComponentElement, ReactChildren } from 'react'

import './index.scss'

export interface SpinProps {
  size?: number
  color?: string
  children?: ReactChildren | string
}

const Spin = (props: SpinProps): FunctionComponentElement<SpinProps> => {
  const { size = 22, color = 'inherit', children } = props
  const style: { [key: string]: any } = { color }
  const classPrefix = 'teak-spin'

  if (size) {
    style.width = `${size}px`
    style.height = `${size}px`
  }

  return (
    <span className={`${classPrefix}`} style={style}>
      <svg className={`${classPrefix}-icon`} viewBox="25 25 50 50">
        <circle cx="50" cy="50" fill="none" r="20" />
      </svg>
      <span className={`${classPrefix}-text`}>{children}</span>
    </span>
  )
}

export default Spin
