interface User<IdType = string> {
  _id: IdType;
  uid: string;
  name: string;

  avatarUrl: string | null;

  canCreateStage: boolean;

  stageId: IdType | null;
  groupId: IdType | null; // Redundancy, but needed for performance issues
  stageMemberId: IdType | null; // Redundancy, but needed for performance issues
}

export default User;
