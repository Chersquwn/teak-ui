import React, { FC } from 'react'
import { Fade } from 'teak-ui/Animation'

import './index.scss'

export interface MaskProps {
  zIndex?: number
  visible?: boolean
  onClick?: () => void
  duration: number
}

const Mask: FC<MaskProps> = props => {
  const { visible = true, onClick, zIndex = 10000, duration = 300 } = props
  const classPrefix = 'teak-mask'

  return (
    <Fade appear in={visible} timeout={duration}>
      <div
        className={`${classPrefix}`}
        role="mask"
        style={{ zIndex }}
        onClick={onClick ? onClick : null}
      />
    </Fade>
  )
}

export default Mask
