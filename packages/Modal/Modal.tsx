import React, { ReactNode, FunctionComponent } from 'react'
import Popup from 'teak-ui/Popup'

export interface ModalProps {
  visible: boolean
  header?: ReactNode
  footer?: ReactNode
  children: ReactNode
  onClosed?: () => void
}

const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => {
  const { header, footer, children, ...restProps } = props
  const classPrefix = 'teak-modal'

  return (
    <Popup className={`${classPrefix}`} {...restProps}>
      <div className={`${classPrefix}-container`} role="modal">
        {header && <div className={`${classPrefix}-header`}>{header}</div>}
        {<div className={`${classPrefix}-content`}>{children}</div>}
        {footer && <div className={`${classPrefix}-footer`}>{footer}</div>}
      </div>
    </Popup>
  )
}

export default Modal
