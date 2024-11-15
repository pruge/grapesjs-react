import type { Plugin, PluginOptions } from 'grapesjs';
export type GrapesPlugins = string | Plugin<any>;
export type PluginTypeToLoad = (GrapesPlugins | PluginToLoad | false | null | undefined);
export type PluginToLoad = {
    id: string;
    src: string;
    options?: PluginOptions;
};
export declare function loadPlugins(plugins: PluginToLoad[]): Promise<{
    loaded: PluginToLoad[];
    failed: PluginToLoad[];
}>;
export declare const initPlugins: (plugins: PluginTypeToLoad[]) => Promise<{
    plugins: GrapesPlugins[];
    pluginOptions: PluginOptions;
}>;
