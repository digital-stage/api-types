import { GroupId, StageId, StageMemberId, UserId } from "../IdTypes";
import ThreeDimensionalProperties from "./ThreeDimensionalProperties";
import VolumeProperties from "./VolumeProperties";

interface StageMember extends ThreeDimensionalProperties, VolumeProperties {
  _id: StageMemberId;
  stageId: StageId;
  groupId: GroupId;
  userId: UserId;

  isAdmin: boolean;
  isSoundEditor: boolean;
}

export default StageMember;
