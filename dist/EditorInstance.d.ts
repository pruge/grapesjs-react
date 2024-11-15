import type gjs from 'grapesjs';
import type { Editor, EditorConfig, ProjectData } from 'grapesjs';
import { PluginTypeToLoad } from './utils/plugins';
export interface EditorProps extends React.HTMLProps<HTMLDivElement> {
    grapesjs: string | typeof gjs;
    /**
     * GrapesJS options.
     */
    options?: EditorConfig;
    /**
     * Load GrapesJS CSS file asynchronously from URL.
     * @example 'https://unpkg.com/grapesjs/dist/css/grapes.min.css'
     */
    grapesjsCss?: string;
    /**
     * Array of plugins.
     * Differently from the GrapesJS `plugins` option, this one allows also you to load plugins
     * asynchronously from a CDN URL.
     * @example
     * plugins: [
     *  {
     *    // The id should be name of the plugin that will be actually loaded
     *    id: 'gjs-blocks-basic',
     *    src: 'https://unpkg.com/grapesjs-blocks-basic',
     *    options: {}
     *  }
     *  // plugin already loaded in the global scope (eg. loaded via CND in HTML)
     *  'grapesjs-plugin-forms',
     *  // plugin as a function
     *  myPlugin,
     * ]
     */
    plugins?: PluginTypeToLoad[];
    /**
     * Callback triggered once the editor instance is created.
     */
    onEditor?: (editor: Editor) => void;
    /**
     * Callback triggered once the editor is ready (mounted and loaded data from the Storage).
     */
    onReady?: (editor: Editor) => void;
    /**
     * Callback triggered on each update in the editor project.
     * The updated ProjectData (JSON) is passed as a first argument.
     */
    onUpdate?: (projectData: ProjectData, editor: Editor) => void;
    /**
     * Avoid showing children of the editor until the editor is ready (mounted and loaded data from the Storage).
     */
    waitReady?: boolean | React.ReactNode;
}
declare const EditorInstance: import("react").NamedExoticComponent<EditorProps>;
export default EditorInstance;
