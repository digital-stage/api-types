import {UserId} from "../IdTypes";

interface User {
    id: UserId;
    name: string;

    avatarUrl: string | null;

    canCreateStage: boolean;
}

export default User;