import React, { FunctionComponentElement } from 'react'
import DemoBlock from 'example/components/DemoBlock'
import Button from 'teak-ui/Button'
import Toast from 'teak-ui/Toast'

const ToastDemo = (): FunctionComponentElement<{}> => {
  function onClickToastInfo(): void {
    Toast.info({ message: '这是一个吐司' }).then(() => {
      alert('弹窗回调')
    })
  }

  return (
    <>
      <DemoBlock title="文字提示">
        <Button type="default" onClick={onClickToastInfo}>
          文字提示
        </Button>
      </DemoBlock>
    </>
  )
}

export default ToastDemo
