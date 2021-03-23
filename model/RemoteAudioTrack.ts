import {
  LocalAudioTrackId,
  RemoteAudioTrackId,
  StageMemberId,
} from "../IdTypes";
import ThreeDimensionalProperties from "./ThreeDimensionalProperties";
import VolumeProperties from "./VolumeProperties";

interface RemoteAudioTrack
  extends ThreeDimensionalProperties,
    VolumeProperties {
  _id: RemoteAudioTrackId;
  localAudioTrackId: LocalAudioTrackId;
  stageMemberId: StageMemberId;

  /**
   * The type of the producing device
   */
  type: string;
  /**
   * Type specific payload
   */
  data: {
    [id: string]: any;
  };
}

export default RemoteAudioTrack;
