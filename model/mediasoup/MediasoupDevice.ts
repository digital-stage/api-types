import Device from "../Device";

export type WebMediaDeviceId = any;

export interface WebMediaDevice {
  _id: WebMediaDeviceId;
  label: string;
}

interface MediasoupDevice extends Device {
  type: "mediasoup";

  canMediasoup: true;

  // WebRTC video device
  inputVideoDevices: WebMediaDevice[];
  inputVideoDeviceId?: WebMediaDeviceId;

  // WebRTC audio device
  inputAudioDevices: WebMediaDevice[];
  inputAudioDeviceId?: WebMediaDevice;
  outputAudioDevices: WebMediaDevice[];
  outputAudioDeviceId?: WebMediaDevice;

  egoVolume: number;
}

export default MediasoupDevice;
