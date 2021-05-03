import VolumeProperties from './VolumeProperties';
interface CustomRemoteAudioTrackVolume<IdType = string> extends VolumeProperties {
    _id: IdType;
    deviceId: IdType;
    remoteAudioTrackId: IdType;
    stageId: IdType;
    userId: IdType;
}
export default CustomRemoteAudioTrackVolume;
