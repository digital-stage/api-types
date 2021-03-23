import Device from "../Device";

export interface JammerDevice extends Device {
  type: "jammer";

  canJammer: true;
}
