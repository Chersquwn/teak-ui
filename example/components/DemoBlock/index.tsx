import React, { FunctionComponentElement } from 'react'
import './index.scss'

const DemoBlock = ({ children, title }): FunctionComponentElement<{}> => {
  return (
    <div className="demo-block">
      <div className="demo-block-title">{title}</div>
      {children}
    </div>
  )
}

export default DemoBlock
