import Stage from "./model/Stage";
import Group from "./model/Group";
import StageMember from "./model/StageMember";
import RemoteAudioTrack from "./model/RemoteAudioTrack";
import ThreeDimensionalProperties from "./model/ThreeDimensionalProperties";
import User from "./model/User";
import CustomGroupVolume from "./model/CustomGroupVolume";
import CustomGroupPosition from "./model/CustomGroupPosition";
import VolumeProperties from "./model/VolumeProperties";
import CustomStageMemberVolume from "./model/CustomStageMemberVolume";
import CustomStageMemberPosition from "./model/CustomStageMemberPosition";
import LocalAudioTrack from "./model/LocalAudioTrack";
import CustomRemoteAudioTrackVolume from "./model/CustomRemoteAudioTrackVolume";
import CustomRemoteAudioTrackPosition from "./model/CustomRemoteAudioTrackPosition";
import StagePackage from "./model/StagePackage";
import LocalVideoTrack from "./model/LocalVideoTrack";
import Router from "./model/Router";
import Device from "./model/Device";
import SoundCard from "./model/SoundCard";
import ChatMessage from "./model/ChatMessage";
import RemoteVideoTrack from "./model/RemoteVideoTrack";

namespace ServerDevicePayloads {
  export type PayloadIdType = string;
  export type CustomizedRemoteAudioTrackPositionId = PayloadIdType;
  export type CustomizedGroupPositionId = PayloadIdType;
  export type CustomizedStageMemberPositionId = PayloadIdType;
  export type DeviceId = PayloadIdType;
  export type GroupId = PayloadIdType;
  export type LocalAudioTrackId = PayloadIdType;
  export type RemoteAudioTrackId = PayloadIdType;
  export type StageId = PayloadIdType;
  export type StageMemberId = PayloadIdType;
  export type UserId = PayloadIdType;
  export type RouterId = PayloadIdType;
  export type LocalVideoTrackId = PayloadIdType;
  export type SoundCardId = PayloadIdType;
  export type RemoteVideoTrackId = PayloadIdType;

  export type RouterAdded = Router;
  export type RouterChanged = { _id: RouterId } & Partial<Router>;
  export type RouterRemoved = UserId;

  export type UserChanged = { _id: UserId } & Partial<User>;
  export type UserReady = User;
  export type RemoteUserAdded = User;
  export type RemoteUserChanged = { _id: UserId } & Partial<User>;
  export type RemoteUserRemoved = UserId;

  export type ChatMessageSend = ChatMessage;

  /* DEVICE */
  export type LocalDeviceReady = Device;
  export type DeviceAdded = Device;
  export type DeviceChanged = { _id: DeviceId } & Partial<Device>;
  export type DeviceRemoved = DeviceId;
  export type SoundCardAdded = SoundCard;
  export type SoundCardChanged = { _id: DeviceId } & Partial<SoundCard>;
  export type SoundCardRemoved = SoundCardId;

  /* STAGE */
  export type StageAdded = Stage;
  export type StageChanged = { _id: StageId } & Partial<Stage>;
  export type StageRemoved = StageId;
  export type StageJoined = {
    stageId: StageId;
    stageMemberId: StageMemberId;
    groupId: GroupId;
  } & StagePackage;

  /* GROUP */
  export type GroupAdded = Group;
  export type GroupChanged = { _id: GroupId } & Partial<Group>;
  export type GroupRemoved = GroupId;

  export type CustomGroupVolumeAdded = CustomGroupVolume;
  export type CustomGroupVolumeChanged = {
    _id: CustomizedGroupPositionId;
  } & Partial<VolumeProperties>;
  export type CustomGroupVolumeRemoved = CustomizedGroupPositionId;
  export type CustomGroupPositionAdded = CustomGroupPosition;
  export type CustomGroupPositionChanged = {
    _id: CustomizedGroupPositionId;
  } & Partial<ThreeDimensionalProperties>;
  export type CustomGroupPositionRemoved = CustomizedGroupPositionId;

  /* STAGE MEMBER */
  export type StageMemberAdded = StageMember;
  export type StageMemberChanged = {
    _id: StageMemberId;
  } & Partial<StageMember>;
  export type StageMemberRemoved = StageMemberId;
  export type CustomStageMemberVolumeAdded = CustomStageMemberVolume;
  export type CustomStageMemberVolumeChanged = {
    _id: CustomizedStageMemberPositionId;
  } & Partial<VolumeProperties>;
  export type CustomStageMemberVolumeRemoved = CustomizedStageMemberPositionId;
  export type CustomStageMemberPositionAdded = CustomStageMemberPosition;
  export type CustomStageMemberPositionChanged = {
    _id: CustomizedStageMemberPositionId;
  } & Partial<ThreeDimensionalProperties>;
  export type CustomStageMemberPositionRemoved = CustomizedStageMemberPositionId;

  /* VIDEO TRACKS */
  export type LocalVideoTrackAdded = LocalVideoTrack;
  export type LocalVideoTrackChanged = {
    _id: LocalVideoTrackId;
  } & Partial<LocalVideoTrack>;
  export type LocalVideoTrackRemoved = LocalVideoTrackId;

  export type RemoteVideoTrackAdded = RemoteVideoTrack;
  export type RemoteVideoTrackChanged = {
    _id: RemoteVideoTrackId;
  } & Partial<RemoteVideoTrack>;
  export type RemoteVideoTrackRemoved = RemoteVideoTrackId;

  /* AUDIO TRACKS */
  export type LocalAudioTrackAdded = LocalAudioTrack;
  export type LocalAudioTrackChanged = {
    _id: LocalAudioTrackId;
  } & Partial<LocalAudioTrack>;
  export type LocalAudioTrackRemoved = LocalAudioTrackId;

  export type RemoteAudioTrackAdded = RemoteAudioTrack;
  export type RemoteAudioTrackChanged = {
    _id: RemoteAudioTrackId;
  } & Partial<RemoteAudioTrack>;
  export type RemoteAudioTrackRemoved = RemoteAudioTrackId;

  export type CustomRemoteAudioTrackVolumeAdded = CustomRemoteAudioTrackVolume;
  export type CustomRemoteAudioTrackVolumeChanged = {
    _id: CustomizedRemoteAudioTrackPositionId;
  } & Partial<VolumeProperties>;
  export type CustomRemoteAudioTrackVolumeRemoved = CustomizedRemoteAudioTrackPositionId;
  export type CustomRemoteAudioTrackPositionAdded = CustomRemoteAudioTrackPosition;
  export type CustomRemoteAudioTrackPositionChanged = {
    _id: CustomizedRemoteAudioTrackPositionId;
  } & Partial<ThreeDimensionalProperties>;
  export type CustomRemoteAudioTrackPositionRemoved = CustomizedRemoteAudioTrackPositionId;
}

export default ServerDevicePayloads;
