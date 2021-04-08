import User from "./User";
import Stage from "./Stage";
import Group from "./Group";
import CustomGroupPosition from "./CustomGroupPosition";
import CustomStageMemberPosition from "./CustomStageMemberPosition";
import StageMember from "./StageMember";
import CustomGroupVolume from "./CustomGroupVolume";
import CustomStageMemberVolume from "./CustomStageMemberVolume";
import RemoteAudioTrack from "./RemoteAudioTrack";
import RemoteVideoTrack from "./RemoteVideoTrack";
import CustomRemoteAudioTrackPosition from "./CustomRemoteAudioTrackPosition";
import CustomRemoteAudioTrackVolume from "./CustomRemoteAudioTrackVolume";

interface StagePackage<IdType = string> {
  remoteUsers: User<IdType>[];

  stage?: Stage<IdType>;
  groups?: Group<IdType>[];
  customGroupVolumes: CustomGroupVolume<IdType>[];
  customGroupPositions: CustomGroupPosition<IdType>[];
  stageMembers: StageMember<IdType>[];
  customStageMemberVolumes: CustomStageMemberVolume<IdType>[];
  customStageMemberPositions: CustomStageMemberPosition<IdType>[];
  remoteAudioTracks: RemoteAudioTrack<IdType>[];
  remoteVideoTracks: RemoteVideoTrack<IdType>[];
  customRemoteAudioTrackPositions: CustomRemoteAudioTrackPosition<IdType>[];
  customRemoteAudioTrackVolumes: CustomRemoteAudioTrackVolume<IdType>[];
}

export default StagePackage;
