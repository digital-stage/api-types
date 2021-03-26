import ThreeDimensionalProperties from "./ThreeDimensionalProperties";
import VolumeProperties from "./VolumeProperties";

interface Group<IdType = string>
  extends ThreeDimensionalProperties,
    VolumeProperties {
  _id: IdType;
  stageId: IdType;
  name: string;
  description: string;

  color: string;

  iconUrl: string | null;
}

export default Group;
