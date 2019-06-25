import React, { FunctionComponentElement } from 'react'
import DemoBlock from 'example/components/DemoBlock'
import Button from '../index'

import './index.scss'

const ButtonDemo = (): FunctionComponentElement<{}> => {
  return (
    <>
      <DemoBlock title="按钮类型">
        <Button type="default">默认按钮</Button>
        <Button type="primary">主题按钮</Button>
        <Button type="inverse">反色按钮</Button>
        <Button type="danger">危险按钮</Button>
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Button type="default" disabled>默认按钮</Button>
        <Button type="primary" disabled>主题按钮</Button>
        <Button type="inverse" disabled>反色按钮</Button>
        <Button type="danger" disabled>危险按钮</Button>
      </DemoBlock>
      <DemoBlock title="按钮大小">
        <Button type="primary" size="large">large按钮</Button>
        <Button type="primary" size="normal">normal按钮</Button>
        <Button type="primary" size="small">small按钮</Button>
      </DemoBlock>
      <DemoBlock title="按钮形状">
        <Button type="primary" shape="square">方形按钮</Button>
        <Button type="danger" shape="round">圆形按钮</Button>
      </DemoBlock>
    </>
  )
}

export default ButtonDemo
