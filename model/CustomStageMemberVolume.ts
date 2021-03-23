import {CustomizedStageMemberVolumeId, DeviceId, StageMemberId, UserId} from "../IdTypes";
import VolumeProperties from "./VolumeProperties";

interface CustomStageMemberVolume extends VolumeProperties {
    id: CustomizedStageMemberVolumeId;
    userId: UserId;
    deviceId: DeviceId;
    stageMemberId: StageMemberId;
}

export default CustomStageMemberVolume;