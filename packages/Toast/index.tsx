import React, { createRef } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Toast, { ToastHandlers } from './Toast'

export interface ToastInfoProps {
  message: string
  duration?: number
}

let notication: Element

const info = async (props: ToastInfoProps): Promise<{}> => {
  return new Promise(resolve => {
    const { message, duration } = props
    const toastRef = createRef<ToastHandlers>()

    if (notication) {
      destroy(notication)
    }

    notication = document.createElement('div')
    document.body.appendChild(notication)

    render(
      <Toast
        ref={toastRef}
        duration={duration}
        message={message}
        onClosed={onClosed}
      />,
      notication
    )

    toastRef.current.show()

    function onClosed(): void {
      destroy(notication)
      resolve()
    }
  })
}

function destroy(notication: Element): void {
  unmountComponentAtNode(notication)
  document.body.removeChild(notication)
}

export default {
  info
}
