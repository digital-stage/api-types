import { CustomizedGroupVolumeId, DeviceId, GroupId, UserId } from "../IdTypes";
import VolumeProperties from "./VolumeProperties";

interface CustomGroupVolume extends VolumeProperties {
  _id: CustomizedGroupVolumeId;
  userId: UserId;
  deviceId: DeviceId;
  groupId: GroupId;
}

export default CustomGroupVolume;
