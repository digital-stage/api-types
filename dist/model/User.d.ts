interface User<IdType = string> {
    _id: IdType;
    uid: string;
    name: string;
    avatarUrl: string | null;
    canCreateStage: boolean;
    stageId: IdType | null;
    groupId: IdType | null;
    stageMemberId: IdType | null;
}
export default User;
