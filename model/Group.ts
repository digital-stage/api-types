import {GroupId, StageId} from "../IdTypes";

interface Group {
    id: GroupId;
    stageId: StageId;
    name: string;
    description: string;

    color: string;

    iconUrl: string | null;
}

export default Group;
