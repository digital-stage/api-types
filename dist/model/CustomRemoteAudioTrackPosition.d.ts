import ThreeDimensionalProperties from './ThreeDimensionalProperties';
interface CustomRemoteAudioTrackPosition<IdType = string> extends ThreeDimensionalProperties {
    _id: IdType;
    deviceId: IdType;
    remoteAudioTrackId: IdType;
    stageId: IdType;
    userId: IdType;
}
export default CustomRemoteAudioTrackPosition;
