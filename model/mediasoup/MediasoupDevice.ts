import Device from "../Device";

export interface WebMediaDevice<IdType = string> {
  _id: IdType;
  label: string;
}

interface MediasoupDevice<IdType = string> extends Device<IdType> {
  type: "mediasoup";

  canMediasoup: true;

  // WebRTC video device
  inputVideoDevices: IdType[];
  inputVideoDeviceId?: IdType;

  // WebRTC audio device
  inputAudioDevices: IdType[];
  inputAudioDeviceId?: IdType;
  outputAudioDevices: IdType[];
  outputAudioDeviceId?: IdType;

  egoVolume: number;
}

export default MediasoupDevice;
