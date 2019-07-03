import React, { FunctionComponentElement } from 'react'
import DemoBlock from 'example/components/DemoBlock'
import Button from 'teak-ui/Button'
import Dialog from 'teak-ui/Modal/Dialog'

const ModalDemo = (): FunctionComponentElement<{}> => {
  function onClickAlert(): void {
    Dialog.alert({ title: '标题', message: '这是一个带标题的弹窗' }).then(
      () => {
        alert('弹窗回调')
      }
    )
  }

  function onClickAlertWithoutTitle(): void {
    Dialog.alert({ message: '这是一个不带标题的弹窗' })
  }

  return (
    <>
      <DemoBlock title="提示弹窗">
        <Button type="default" onClick={onClickAlert}>
          提示弹窗
        </Button>
        <Button type="default" onClick={onClickAlertWithoutTitle}>
          提示弹窗（不带标题）
        </Button>
      </DemoBlock>
    </>
  )
}

export default ModalDemo
