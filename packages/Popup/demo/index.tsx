import React, { FunctionComponentElement, useState } from 'react'
import DemoBlock from 'example/components/DemoBlock'
import Button from 'teak-ui/Button'
import Popup from 'teak-ui/Popup'

import './index.scss'

const PopupDemo = (): FunctionComponentElement<{}> => {
  const [defaultVisible, setDefaultVisible] = useState(false)
  const [topVisible, setTopVisible] = useState(false)
  const [bottomVisible, setBottomVisible] = useState(false)
  const [leftVisible, setLeftVisible] = useState(false)
  const [rightVisible, setRightVisible] = useState(false)

  return (
    <>
      <DemoBlock title="基础用法">
        <Button type="default" onClick={() => setDefaultVisible(true)}>
          默认弹出
        </Button>
      </DemoBlock>
      <DemoBlock title="弹出位置">
        <Button type="default" onClick={() => setTopVisible(true)}>
          顶部弹出
        </Button>
        <Button type="default" onClick={() => setBottomVisible(true)}>
          底部弹出
        </Button>
        <Button type="default" onClick={() => setLeftVisible(true)}>
          左侧弹出
        </Button>
        <Button type="default" onClick={() => setRightVisible(true)}>
          右侧弹出
        </Button>
      </DemoBlock>

      <Popup
        mask
        height="120px"
        visible={defaultVisible}
        width="60%"
        onClickMask={() => setDefaultVisible(false)}
      >
        <div className="popup-content" />
      </Popup>
      <Popup
        mask
        height="20%"
        position="top"
        visible={topVisible}
        onClickMask={() => setTopVisible(false)}
      >
        <div className="popup-content" />
      </Popup>
      <Popup
        mask
        height="20%"
        position="bottom"
        visible={bottomVisible}
        onClickMask={() => setBottomVisible(false)}
      >
        <div className="popup-content" />
      </Popup>
      <Popup
        mask
        position="left"
        visible={leftVisible}
        width="20%"
        onClickMask={() => setLeftVisible(false)}
      >
        <div className="popup-content" />
      </Popup>
      <Popup
        mask
        position="right"
        visible={rightVisible}
        width="20%"
        onClickMask={() => setRightVisible(false)}
      >
        <div className="popup-content" />
      </Popup>
    </>
  )
}

export default PopupDemo
