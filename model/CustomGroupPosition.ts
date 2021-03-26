import ThreeDimensionalProperties from "./ThreeDimensionalProperties";

interface CustomGroupPosition<IdType = string>
  extends ThreeDimensionalProperties {
  _id: IdType;
  userId: IdType;
  deviceId: IdType;
  groupId: IdType;
}

export default CustomGroupPosition;
