import {GroupId, StageId} from "../IdTypes";
import ThreeDimensionalProperties from "./ThreeDimensionalProperties";
import VolumeProperties from "./VolumeProperties";

interface Group extends ThreeDimensionalProperties, VolumeProperties {
    id: GroupId;
    stageId: StageId;
    name: string;
    description: string;

    color: string;

    iconUrl: string | null;
}

export default Group;
