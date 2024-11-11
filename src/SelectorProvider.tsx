import type {Component, Sector} from 'grapesjs'
import React, {memo, useEffect, useState} from 'react'
import {useEditorInstance} from './context/EditorInstance'
import {isFunction} from './utils'
import {useEditorOptions} from './context/EditorOptions'

export type SelectorState = {
  /**
   * Select component
   */
  component?: Component

  transform?: Sector
}

export type SelectorResultProps = SelectorState

export interface SelectorsProviderProps {
  children: (props: SelectorResultProps) => React.JSX.Element
}

const SelectorProvider = memo(function ({children}: SelectorsProviderProps) {
  const {editor} = useEditorInstance()
  const options = useEditorOptions()
  const [propState, setPropState] = useState<SelectorState>(() => ({
    component: undefined,
    transform: undefined,
  }))

  useEffect(() => {
    if (!editor) return
    const {Selectors, Styles} = editor
    const event = Selectors.events.custom
    const sm = editor.StyleManager

    const up = () => {
      setPropState({
        component: editor.getSelected(),
        transform: sm.getSector('transform-xywh'),
      })
    }
    const up2 = () => {
      setPropState((prev) => ({...prev, transform: sm.getSector('transform-xywh')}))
    }
    // Styles.__trgCustom()

    editor.on(event, up)
    editor.on(Styles.events.custom, up2)
    Selectors.__trgCustom()

    return () => {
      editor.off(event, up)
      editor.off(Styles.events.custom, up2)
    }
  }, [editor])

  useEffect(() => options.setCustomSelectors(true), [])

  return editor ? (isFunction(children) ? children(propState) : null) : null
})

export default SelectorProvider
