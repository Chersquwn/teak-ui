import React, { FunctionComponentElement } from 'react'
import './index.scss'

const GroupItem = ({ children, title }): FunctionComponentElement<{}> => {
  return (
    <div className="group-item">
      <div className="group-item-title">{title}</div>
      {children}
    </div>
  )
}

export default GroupItem
