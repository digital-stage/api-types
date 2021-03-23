import { StageId, UserId } from "../IdTypes";

interface Stage {
  _id: StageId;

  name: string;
  description: string;

  admins: UserId[];
  soundEditors: UserId[];

  iconUrl: string | null;

  [additional: string]: any;
}

export default Stage;
