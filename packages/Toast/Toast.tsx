import React, {
  useState,
  useImperativeHandle,
  RefForwardingComponent,
  Ref,
  forwardRef
} from 'react'
import { Fade, Scale } from 'teak-ui/Animation'

import './index.scss'

export interface ToastProps {
  message: string
  duration?: number
  onClosed: () => void
}

export interface ToastHandlers {
  show: () => void
  hide: () => void
}

const Toast: RefForwardingComponent<ToastHandlers, ToastProps> = (
  props: ToastProps,
  ref?: Ref<ToastHandlers>
) => {
  const { message, duration = 2000, onClosed } = props
  const [visible, setVisible] = useState(false)
  const classPrefix = 'teak-toast'

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true)
      setTimeout(() => {
        setVisible(false)
      }, duration)
    },
    hide: () => {
      setVisible(false)
    }
  }))

  return (
    <Fade in={visible} timeout={300} onExited={onClosed}>
      <div className={`${classPrefix}`}>
        <Scale in={visible} timeout={duration}>
          <div className={`${classPrefix}-container`}>
            <p className={`${classPrefix}-message`}>{message}</p>
          </div>
        </Scale>
      </div>
    </Fade>
  )
}

export default forwardRef(Toast)
