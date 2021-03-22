import {StageId, UserId} from "../IdTypes";

interface Stage {
    id: StageId;
    admins: UserId[];
    soundEditors: UserId[];

    name: string;
    description: string;

    iconUrl: string | null;

    [additional: string]: any
}

export default Stage;
