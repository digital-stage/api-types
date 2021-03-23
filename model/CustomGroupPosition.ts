import ThreeDimensionalProperties from "./ThreeDimensionalProperties";
import {CustomizedGroupPositionId, DeviceId, GroupId, UserId} from "../IdTypes";

interface CustomGroupPosition extends ThreeDimensionalProperties {
    id: CustomizedGroupPositionId;
    userId: UserId;
    deviceId: DeviceId;
    groupId: GroupId;
}

export default CustomGroupPosition;