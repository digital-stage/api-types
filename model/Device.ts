import { DeviceId, UserId } from "../IdTypes";

interface Device {
  _id: DeviceId;
  userId: UserId;

  /**
   * This _identifies the type of the device. Regarding to the type additional items may be available.
   */
  type: string;

  online: boolean;

  canAudio: boolean;
  canVideo: boolean;
  receiveAudio: boolean;
  receiveVideo: boolean;

  /**
   * Use this to _identify existing devices on connect, on native clients you might use the mac address, on browser a cookie _id
   */
  uuid: string;

  [additional: string]: any;
}

export default Device;
