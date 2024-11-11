import type {Selector, State, Editor, Component} from 'grapesjs'
import React, {memo, useEffect, useState} from 'react'
import {useEditorInstance} from './context/EditorInstance'
import {isFunction, noop} from './utils'
import {PortalContainerResult, portalContainer} from './utils/react'
import {useEditorOptions} from './context/EditorOptions'

export type SelectorsState = {
  /**
   * Array of current selectors.
   */
  selectors: Selector[]

  /**
   * Array of available states.
   */
  states: State[]

  /**
   * Current selected state.
   */
  selectedState: string

  /**
   * Selector strings of currently selected targets.
   */
  targets: string[]

  /**
   * Add new selector to selected targets.
   */
  addSelector: (...args: Parameters<Editor['Selectors']['addSelected']>) => void

  /**
   * Remove selector from selected targets.
   */
  removeSelector: (...args: Parameters<Editor['Selectors']['removeSelected']>) => void

  /**
   * Update current state.
   */
  setState: (...args: Parameters<Editor['Selectors']['setState']>) => void

  /**
   * Add new state.
   */
  addState: (newState: {name: string; label: string}) => void

  /**
   * Default Selectors container.
   */
  Container: PortalContainerResult

  /**
   * Select component
   */
  component?: Component

  /**
   * Transform sector
   */
  // transform?: Sector

  /**
   * Style manager
   */
  sm?: Editor['StyleManager']
}

export type SelectorsResultProps = SelectorsState

export interface SelectorsProviderProps {
  children: (props: SelectorsResultProps) => React.JSX.Element
}

const SelectorsProvider = memo(function ({children}: SelectorsProviderProps) {
  const {editor} = useEditorInstance()
  const options = useEditorOptions()
  const [propState, setPropState] = useState<SelectorsState>(() => ({
    selectors: [],
    states: [],
    selectedState: '',
    targets: [],
    addSelector: noop,
    removeSelector: noop,
    setState: noop,
    addState: noop,
    Container: () => null,
  }))

  useEffect(() => {
    if (!editor) return
    const {Selectors} = editor
    const event = Selectors.events.custom
    const sm = editor.StyleManager

    const up = ({container}: {container: HTMLElement}) => {
      setPropState({
        selectors: Selectors.getSelected(),
        states: Selectors.getStates(),
        selectedState: Selectors.getState(),
        targets: Selectors.getSelectedTargets().map((t) => {
          return t.getSelectorsString()
        }),
        addSelector: (...args) => Selectors.addSelected(...args),
        removeSelector: (...args) => Selectors.removeSelected(...args),
        setState: (...args) => Selectors.setState(...args),
        addState: (newState) => {
          const states = Selectors.getStates()
            .map((s) => {
              return {
                name: s.getName(),
                label: s.getLabel(),
              }
            })
            .concat(newState)
          // @ts-ignore
          Selectors.setStates(states)
        },
        Container: portalContainer(container),
        component: editor.getSelected(),
        // transform: sm.getSector('transform-xywh'),
        sm,
      })
    }

    editor.on(event, up)
    // Selectors.__trgCustom()

    return () => {
      editor.off(event, up)
    }
  }, [editor])

  useEffect(() => options.setCustomSelectors(true), [])

  return editor ? (isFunction(children) ? children(propState) : null) : null
})

export default SelectorsProvider
