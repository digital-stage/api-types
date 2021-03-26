import ThreeDimensionalProperties from "./ThreeDimensionalProperties";
import VolumeProperties from "./VolumeProperties";

interface StageMember<IdType = string>
  extends ThreeDimensionalProperties,
    VolumeProperties {
  _id: IdType;
  stageId: IdType;
  groupId: IdType;
  userId: IdType;

  online: boolean;

  isDirector: boolean;
}

export default StageMember;
