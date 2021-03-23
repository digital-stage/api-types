import {
  CustomizedStageMemberVolumeId,
  DeviceId,
  StageMemberId,
  UserId,
} from "../IdTypes";
import VolumeProperties from "./VolumeProperties";

interface CustomStageMemberVolume extends VolumeProperties {
  _id: CustomizedStageMemberVolumeId;
  userId: UserId;
  deviceId: DeviceId;
  stageMemberId: StageMemberId;
}

export default CustomStageMemberVolume;
