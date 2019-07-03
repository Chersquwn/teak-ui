import React, { createRef } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Dialog, { DialogProps, DialogHandlers } from './Dialog'

export type AlertProps = Omit<DialogProps, 'visible'>

const alert = async ({
  buttons = [],
  ...restProps
}: AlertProps): Promise<{}> => {
  return new Promise(resolve => {
    const dialogRef = createRef<DialogHandlers>()
    const div: any = document.createElement('div')

    document.body.appendChild(div)

    if (buttons.length === 0) {
      buttons.push({
        type: 'inverse',
        text: '确定',
        className: 'teak-dialog-button',
        onClick: () => {
          dialogRef.current.close()
          resolve()
        }
      })
    }

    function remove(): void {
      unmountComponentAtNode(div)
      document.body.removeChild(div)
    }

    render(
      <Dialog
        ref={dialogRef}
        {...restProps}
        buttons={buttons}
        onClosed={remove}
      />,
      div
    )

    dialogRef.current.open()
  })
}

export default {
  alert
}
