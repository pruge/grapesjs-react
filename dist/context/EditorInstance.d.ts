import type { Editor } from 'grapesjs';
declare const EditorInstanceContext: import("react").Context<EditorInstanceState | null>;
export interface EditorInstanceState {
    editor?: Editor;
    setEditor: (editor: Editor) => void;
}
export declare const EditorInstanceProvider: ({ children }: {
    children?: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
/**
 * Context used to keep the editor instance once initialized
 */
export declare const useEditorInstance: () => EditorInstanceState;
/**
 * Get the current editor instance.
 * @returns Editor
 */
export declare const useEditor: () => Editor;
/**
 * Similar to useEditor, but in this case, the editor might be undefined.
 */
export declare const useEditorMaybe: () => Editor | undefined;
export default EditorInstanceContext;
