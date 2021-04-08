import ThreeDimensionalProperties from "./ThreeDimensionalProperties";

interface CustomRemoteAudioTrackPosition<IdType = string>
  extends ThreeDimensionalProperties {
  _id: IdType;
  userId: IdType;
  deviceId: IdType;
  remoteAudioTrackId: IdType;
}

export default CustomRemoteAudioTrackPosition;
