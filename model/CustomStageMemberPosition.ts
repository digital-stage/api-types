import ThreeDimensionalProperties from "./ThreeDimensionalProperties";

interface CustomStageMemberPosition<IdType = string>
  extends ThreeDimensionalProperties {
  _id: IdType;
  userId: IdType;
  deviceId: IdType;
  stageMemberId: IdType;
}

export default CustomStageMemberPosition;
