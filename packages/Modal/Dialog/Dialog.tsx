import React, {
  ReactElement,
  RefForwardingComponent,
  useImperativeHandle,
  forwardRef,
  Ref,
  useState
} from 'react'
import Modal from '../Modal'
import Button, { ButtonType } from 'teak-ui/Button'

import './Dialog.scss'

export interface DialogButton {
  text: string
  className?: string
  type: ButtonType
  onClick: () => void
}

export interface DialogProps {
  // visible: boolean
  title?: string
  message: string
  buttons?: DialogButton[]
  onClosed?: () => void
}

export interface DialogHandlers {
  open: () => void
  close: () => void
}

const Dialog: RefForwardingComponent<DialogHandlers, DialogProps> = (
  props: DialogProps,
  ref?: Ref<DialogHandlers>
) => {
  const { title, message, buttons, onClosed } = props
  const [visible, setVisible] = useState(false)
  const classPrefix = 'teak-dialog'

  const Header = (): ReactElement => (
    <div className={`${classPrefix}-header`}>
      <span className={`${classPrefix}-title`}>{title}</span>
    </div>
  )

  const Footer = (): ReactElement => {
    return (
      <div className={`${classPrefix}-footer`}>
        {buttons.map(({ text, ...restProps }, index) => (
          <Button key={index} shape="square" size="large" {...restProps}>
            {text}
          </Button>
        ))}
      </div>
    )
  }

  useImperativeHandle(ref, () => ({
    open: () => {
      setVisible(true)
    },
    close: () => {
      setVisible(false)
    }
  }))

  return (
    <Modal visible={visible} onClosed={onClosed}>
      <div className={`${classPrefix}-container`}>
        <Header />
        <div className={`${classPrefix}-body`}>
          <p className={`${classPrefix}-message`}>{message}</p>
        </div>
        <Footer />
      </div>
    </Modal>
  )
}

export default forwardRef(Dialog)
