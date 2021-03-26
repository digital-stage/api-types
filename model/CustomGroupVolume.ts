import VolumeProperties from "./VolumeProperties";

interface CustomGroupVolume<IdType = string> extends VolumeProperties {
  _id: IdType;
  userId: IdType;
  deviceId: IdType;
  groupId: IdType;
}

export default CustomGroupVolume;
