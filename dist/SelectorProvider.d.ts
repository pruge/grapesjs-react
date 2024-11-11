import type { Component, Sector } from 'grapesjs';
import React from 'react';
export type SelectorState = {
    /**
     * Select component
     */
    component?: Component;
    transform?: Sector;
};
export type SelectorResultProps = SelectorState;
export interface SelectorsProviderProps {
    children: (props: SelectorResultProps) => React.JSX.Element;
}
declare const SelectorProvider: React.NamedExoticComponent<SelectorsProviderProps>;
export default SelectorProvider;
