import Device from '../Device';
import WebMediaDevice from './WebMediaDevice';
interface MediasoupDevice<IdType = string> extends Device<IdType> {
    type: 'mediasoup';
    canMediasoup: true;
    inputVideoDevices: WebMediaDevice[];
    inputVideoDeviceId?: string;
    inputAudioDevices: WebMediaDevice[];
    inputAudioDeviceId?: string;
    outputAudioDevices: WebMediaDevice[];
    outputAudioDeviceId?: string;
    sampleRate?: number;
    autoGainControl?: boolean;
    echoCancellation?: boolean;
    noiseSuppression?: boolean;
    egoVolume: number;
}
export default MediasoupDevice;
