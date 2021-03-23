import { UserId } from "../IdTypes";

interface User {
  _id: UserId;
  name: string;

  avatarUrl: string | null;

  canCreateStage: boolean;

  stageId: string | null;
  groupId: string | null; // Redundancy, but needed for performance issues
}

export default User;
