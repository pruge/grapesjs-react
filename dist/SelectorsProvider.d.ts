import type { Selector, State, Editor, Component } from 'grapesjs';
import React from 'react';
import { PortalContainerResult } from './utils/react';
export type SelectorsState = {
    /**
     * Array of current selectors.
     */
    selectors: Selector[];
    /**
     * Array of available states.
     */
    states: State[];
    /**
     * Current selected state.
     */
    selectedState: string;
    /**
     * Selector strings of currently selected targets.
     */
    targets: string[];
    /**
     * Add new selector to selected targets.
     */
    addSelector: (...args: Parameters<Editor['Selectors']['addSelected']>) => void;
    /**
     * Remove selector from selected targets.
     */
    removeSelector: (...args: Parameters<Editor['Selectors']['removeSelected']>) => void;
    /**
     * Update current state.
     */
    setState: (...args: Parameters<Editor['Selectors']['setState']>) => void;
    /**
     * Add new state.
     */
    addState: (newState: {
        name: string;
        label: string;
    }) => void;
    /**
     * Default Selectors container.
     */
    Container: PortalContainerResult;
    /**
     * Select component
     */
    component?: Component;
    /**
     * Transform sector
     */
    /**
     * Style manager
     */
    sm?: Editor['StyleManager'];
};
export type SelectorsResultProps = SelectorsState;
export interface SelectorsProviderProps {
    children: (props: SelectorsResultProps) => React.JSX.Element;
}
declare const SelectorsProvider: React.NamedExoticComponent<SelectorsProviderProps>;
export default SelectorsProvider;
