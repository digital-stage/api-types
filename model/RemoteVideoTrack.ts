interface RemoteVideoTrack<IdType = string> {
  _id: IdType;
  userId: IdType;
  stageId: IdType;
  stageMemberId: IdType;
  localVideoTrackId: IdType;
  online: boolean;

  /**
   * The type of the producing device
   */
  type: string;
  /**
   * Type specific payload
   */
  [id: string]: any;
}

export default RemoteVideoTrack;
