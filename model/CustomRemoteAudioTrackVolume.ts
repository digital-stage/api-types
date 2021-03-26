import VolumeProperties from "./VolumeProperties";

interface CustomRemoteAudioTrackVolume<IdType = string>
  extends VolumeProperties {
  _id: IdType;
  userId: IdType;
  deviceId: IdType;
  remoteAudioTrackId: IdType;
}

export default CustomRemoteAudioTrackVolume;
