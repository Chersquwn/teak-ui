import React, { ReactPortal, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import Mask from 'teak-ui/Mask'
import { Fade, Animation } from 'teak-ui/Animation'

import './index.scss'

type PositionType = 'left' | 'right' | 'center' | 'top' | 'bottom'

interface PopupProps {
  visible: boolean
  position?: PositionType
  mask?: boolean
  duration?: number
  children: ReactNode
  width?: string
  height?: string
  className?: string
  onClickMask?: () => void
  onClosed?: () => void
}

const Popup = (props: PopupProps): ReactPortal => {
  const {
    visible = false,
    position = 'center',
    mask = true,
    duration = 300,
    className,
    children,
    width,
    height,
    onClickMask,
    onClosed
  } = props
  const classPrefix = 'teak-popup'
  const classes = classnames(`${classPrefix}`, className)
  const contentClass = classnames(`${classPrefix}-content`, {
    [`${classPrefix}-left`]: position === 'left',
    [`${classPrefix}-right`]: position === 'right',
    [`${classPrefix}-center`]: position === 'center',
    [`${classPrefix}-top`]: position === 'top',
    [`${classPrefix}-bottom`]: position === 'bottom'
  })
  const animationClass = classnames({
    'teak-slide-left': position === 'left',
    'teak-slide-right': position === 'right',
    'teak-slide-top': position === 'top',
    'teak-slide-bottom': position === 'bottom',
    'teak-scale': position === 'center'
  })

  return createPortal(
    <Fade in={visible} timeout={duration} onExited={onClosed}>
      <div className={classes} role="popup">
        {mask && (
          <Mask
            duration={duration}
            visible={visible}
            zIndex={1000}
            onClick={onClickMask}
          />
        )}
        <Animation classNames={animationClass} in={visible} timeout={duration}>
          <div className={contentClass} style={{ width, height, zIndex: 1001 }}>
            {children}
          </div>
        </Animation>
      </div>
    </Fade>,
    document.body
  )
}

export default Popup
