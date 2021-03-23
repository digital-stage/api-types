import ThreeDimensionalProperties from "./ThreeDimensionalProperties";
import {CustomizedGroupPositionId, DeviceId, StageMemberId, UserId} from "../IdTypes";

interface CustomStageMemberPosition extends ThreeDimensionalProperties {
    id: CustomizedGroupPositionId;
    userId: UserId;
    deviceId: DeviceId;
    stageMemberId: StageMemberId;
}

export default CustomStageMemberPosition;