import React, { FunctionComponentElement } from 'react'
import GroupItem from '../../components/GroupItem'
import Button from 'teak-ui/Button'

import './index.scss'

const ButtonDemo = (): FunctionComponentElement<{}> => {
  return (
    <>
      <GroupItem title="按钮类型">
        <Button type="default">默认按钮</Button>
        <Button type="primary">主题按钮</Button>
        <Button type="inverse">反色按钮</Button>
        <Button type="danger">危险按钮</Button>
      </GroupItem>
      <GroupItem title="禁用状态">
        <Button disabled type="default">
          默认按钮
        </Button>
        <Button disabled type="primary">
          主题按钮
        </Button>
        <Button disabled type="inverse">
          反色按钮
        </Button>
        <Button disabled type="danger">
          危险按钮
        </Button>
      </GroupItem>
      <GroupItem title="按钮大小">
        <Button size="large" type="primary">
          large按钮
        </Button>
        <Button size="normal" type="primary">
          normal按钮
        </Button>
        <Button size="small" type="primary">
          small按钮
        </Button>
      </GroupItem>
      <GroupItem title="按钮形状">
        <Button shape="square" type="primary">
          方形按钮
        </Button>
        <Button shape="round" type="danger">
          圆形按钮
        </Button>
      </GroupItem>
      <GroupItem title="带loading的按钮">
        <Button loading type="primary" />
        <Button disabled loading type="primary">
          加载中...
        </Button>
        <Button loading type="danger">
          加载中...
        </Button>
      </GroupItem>
    </>
  )
}

export default ButtonDemo
