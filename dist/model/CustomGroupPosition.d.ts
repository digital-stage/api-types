import ThreeDimensionalProperties from './ThreeDimensionalProperties';
interface CustomGroupPosition<IdType = string> extends ThreeDimensionalProperties {
    _id: IdType;
    deviceId: IdType;
    groupId: IdType;
    userId: IdType;
    stageId: IdType;
}
export default CustomGroupPosition;
