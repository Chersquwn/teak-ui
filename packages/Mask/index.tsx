import React, { FunctionComponentElement } from 'react'
import { Fade } from 'teak-ui/Animation'

import './index.scss'

export interface MaskProps {
  zIndex?: number
  visible?: boolean
  onClick?: () => void
  duration: number
}

const Mask = (props: MaskProps): FunctionComponentElement<MaskProps> => {
  const { visible = true, onClick, zIndex = 10000, duration = 300 } = props
  const classPrefix = 'teak-mask'

  return (
    <Fade in={visible} timeout={duration}>
      <div
        className={`${classPrefix}`}
        style={{ zIndex }}
        onClick={onClick ? onClick : null}
      />
    </Fade>
  )
}

export default Mask
