import Device from '../Device'

export interface WebMediaDevice {
    id: string
    label: string
}

interface MediasoupDevice<IdType = string> extends Device<IdType> {
    type: 'mediasoup'

    canMediasoup: true

    // WebRTC video device
    inputVideoDevices: WebMediaDevice[]
    inputVideoDeviceId?: string

    // WebRTC audio device
    inputAudioDevices: WebMediaDevice[]
    inputAudioDeviceId?: string
    outputAudioDevices: WebMediaDevice[]
    outputAudioDeviceId?: string

  sampleRate?: number;
  autoGainControl?: boolean;
  echoCancellation?: boolean;
  noiseSuppression?: boolean;

  egoVolume: number;
}

export default MediasoupDevice
