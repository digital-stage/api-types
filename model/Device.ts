import {DeviceId, UserId} from "../IdTypes";

interface Device {
    id: DeviceId;
    userId: UserId;

    /**
     * This identifies the type of the device. Regarding to the type additional items may be available.
     */
    type: string;

    online: boolean;

    canAudio: boolean;
    canVideo: boolean;
    receiveAudio: boolean;
    receiveVideo: boolean;

    /**
     * Use this to identify existing devices on connect, on native clients you might use the mac address, on browser a cookie ID
     */
    uuid: string;

    [additional: string]: any
}

export default Device;
