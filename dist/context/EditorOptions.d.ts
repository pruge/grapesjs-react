declare const EditorOptionsContext: import("react").Context<EditorOptionsState | null>;
export interface EditorOptionsState {
    refCanvas?: HTMLElement;
    customModal?: boolean;
    customAssets?: boolean;
    customStyles?: boolean;
    customBlocks?: boolean;
    customLayers?: boolean;
    customSelectors?: boolean;
    customTraits?: boolean;
    customRte?: boolean;
    ready?: boolean;
    setRefCanvas: (ref: HTMLElement) => void;
    setCustomModal: (value: boolean) => void;
    setCustomAssets: (value: boolean) => void;
    setCustomBlocks: (value: boolean) => void;
    setCustomRte: (value: boolean) => void;
    setCustomStyles: (value: boolean) => void;
    setCustomLayers: (value: boolean) => void;
    setCustomSelectors: (value: boolean) => void;
    setCustomTraits: (value: boolean) => void;
    setReady: (value: boolean) => void;
}
export declare const EditorOptionsProvider: ({ children }: {
    children?: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
/**
 * Context used to keep the editor instance once initialized
 */
export declare const useEditorOptions: () => EditorOptionsState;
export default EditorOptionsContext;
