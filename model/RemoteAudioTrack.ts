import ThreeDimensionalProperties from "./ThreeDimensionalProperties";
import VolumeProperties from "./VolumeProperties";

interface RemoteAudioTrack<IdType = string>
  extends ThreeDimensionalProperties,
    VolumeProperties {
  _id: IdType;
  localAudioTrackId: IdType;
  stageMemberId: IdType;
  stageId: IdType;
  userId: IdType;

  online: boolean;

  /**
   * The type of the producing device
   */
  type: string;

  /**
   * Additional type specific payload
   */
  [id: string]: any;
}

export default RemoteAudioTrack;
