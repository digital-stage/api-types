import ThreeDimensionalProperties from './ThreeDimensionalProperties';
import VolumeProperties from './VolumeProperties';
interface StageDevice<IdType = string> extends ThreeDimensionalProperties, VolumeProperties {
    _id: IdType;
    userId: IdType;
    deviceId: IdType;
    stageId: IdType;
    groupId: IdType;
    stageMemberId: IdType;
    active: boolean;
    order: number;
    sendLocal: boolean;
}
export default StageDevice;
