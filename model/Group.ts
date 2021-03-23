import { GroupId, StageId } from "../IdTypes";
import ThreeDimensionalProperties from "./ThreeDimensionalProperties";
import VolumeProperties from "./VolumeProperties";

interface Group extends ThreeDimensionalProperties, VolumeProperties {
  _id: GroupId;
  stageId: StageId;
  name: string;
  description: string;

  color: string;

  iconUrl: string | null;
}

export default Group;
