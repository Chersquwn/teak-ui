import React, { FunctionComponentElement } from 'react'
import GroupItem from '../../components/GroupItem'
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
      <GroupItem title="文字提示">
        <Button type="default" onClick={onClickToastInfo}>
          文字提示
        </Button>
      </GroupItem>
    </>
  )
}

export default ToastDemo
