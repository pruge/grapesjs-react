import type { Device } from 'grapesjs';
import React from 'react';
export type DevicesState = {
    /**
     * Array of devices.
     */
    devices: Device[];
    /**
     * Selected device id.
     */
    selected: string;
    /**
     * Select new device by id.
     */
    select: (deviceId: string) => void;
};
export type DevicesResultProps = DevicesState;
export interface DevicesProviderProps {
    children: (props: DevicesResultProps) => React.JSX.Element;
}
declare const DevicesProvider: React.NamedExoticComponent<DevicesProviderProps>;
export default DevicesProvider;
