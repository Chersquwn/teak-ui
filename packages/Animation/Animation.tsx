import React, { FunctionComponentElement } from 'react'
import { CSSTransition } from 'react-transition-group'

import './index.scss'

export type AnimationProps = CSSTransition.CSSTransitionProps

const Animation = (
  props: AnimationProps
): FunctionComponentElement<AnimationProps> => {
  const { children, unmountOnExit = true, ...restProps } = props

  return (
    <CSSTransition appear unmountOnExit={unmountOnExit} {...restProps}>
      {children}
    </CSSTransition>
  )
}

type Animation = (
  props: AnimationProps
) => FunctionComponentElement<AnimationProps>

export function createAnimation(name: string): Animation {
  return (props: AnimationProps): FunctionComponentElement<AnimationProps> => (
    <Animation classNames={`teak-${name}`} {...props} />
  )
}

export default Animation
