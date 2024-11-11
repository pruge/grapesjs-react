import type { Editor, Page } from 'grapesjs';
import React from 'react';
export type PagesState = {
    /**
     * Array of pages.
     */
    pages: Page[];
    /**
     * Selected page.
     */
    selected?: Page;
    /**
     * Select page.
     */
    select: Editor['Pages']['select'];
    /**
     * Add new page.
     */
    add: Editor['Pages']['add'];
    /**
     * Remove page.
     */
    remove: Editor['Pages']['remove'];
};
export type PagesResultProps = PagesState;
export interface PagesProviderProps {
    children: (props: PagesResultProps) => React.JSX.Element;
}
declare const PagesProvider: React.NamedExoticComponent<PagesProviderProps>;
export default PagesProvider;
