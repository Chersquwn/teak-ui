import React, { FunctionComponentElement, FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import './index.scss'

export type AnimationProps = CSSTransition.CSSTransitionProps

const Animation: FC<AnimationProps> = props => {
  const { children, unmountOnExit = true, ...restProps } = props

  return (
    <CSSTransition appear unmountOnExit={unmountOnExit} {...restProps}>
      {children}
    </CSSTransition>
  )
}

type Animation = typeof Animation

export function createAnimation(name: string): Animation {
  return (props: AnimationProps): FunctionComponentElement<AnimationProps> => (
    <Animation classNames={`teak-${name}`} {...props} />
  )
}

export default Animation
