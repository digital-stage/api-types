import Router from "./model/Router";
import Device from "./model/Device";
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

namespace Payloads {
  export type PayloadIdType = string;
  export type CustomizedRemoteAudioTrackPositionId = PayloadIdType;
  export type CustomizedRemoteAudioTrackVolumeId = PayloadIdType;
  export type CustomizedGroupPositionId = PayloadIdType;
  export type CustomizedGroupVolumeId = PayloadIdType;
  export type CustomizedStageMemberPositionId = PayloadIdType;
  export type CustomizedStageMemberVolumeId = PayloadIdType;
  export type DeviceId = PayloadIdType;
  export type GroupId = PayloadIdType;
  export type LocalAudioTrackId = PayloadIdType;
  export type RemoteAudioTrackId = PayloadIdType;
  export type StageId = PayloadIdType;
  export type StageMemberId = PayloadIdType;
  export type UserId = PayloadIdType;
  export type RouterId = PayloadIdType;

  export interface ConnectAsRouter {
    apiKey: string;
    router?: Omit<Router, "_id">;
  }

  export interface ConnectWithToken {
    token: string;
    s;
    device?: Partial<Device> & { uuid: string };
  }

  /* ROUTER */
  export type ChangeRouter = { _id: RouterId } & Partial<Router>;
  export type RouterAdded = Router;
  export type RouterChanged = { _id: RouterId } & Partial<Router>;
  export type RouterRemoved = UserId;
  export type StageManaged = { _id: StageId } & Partial<Stage>;
  export type StageUnManaged = StageId;
  export type ManageStage = { kind: "video" | "audio", type: string, stage: Stage };
  export type UnManageStage = StageId;
  //AAAAAAH, unmanagestage ? more like unmanagestagevideo and unmangestageaudio?

  /* USER */
  export interface ChangeUser {
    name: string;
    avatarUrl?: string;
  }

  export type UserChanged = { _id: UserId } & Partial<User>;
  export type RemoteUserAdded = User;
  export type RemoteUserChanged = { _id: UserId } & Partial<User>;
  export type RemoteUserRemoved = UserId;

  /* DEVICE */
  export type ChangeDevice = { _id: DeviceId } & Partial<Device>;
  export type DeviceAdded = Device;
  export type DeviceChanged = { _id: DeviceId } & Partial<Device>;
  export type DeviceRemoved = DeviceId;

  /* STAGE */
  export type CreateStage = Omit<Stage, "_id">;
  export type ChangeStage = { _id: StageId } & Partial<Stage>;
  export type RemoveStage = StageId;
  export type StageAdded = Stage;
  export type StageChanged = { _id: StageId } & Partial<Stage>;
  export type StageRemoved = StageId;
  export type StageJoined = {
    stageId: StageId;
    stageMemberId: StageMemberId;
    groupId: GroupId;
  } & StagePackage;

  /* GROUP */
  export type CreateGroup = Partial<Omit<Group, "_id">> & { stageId: StageId };
  export type ChangeGroup = { _id: GroupId } & Partial<Group>;
  export type RemoveGroup = GroupId;
  export type GroupAdded = Group;
  export type GroupChanged = { _id: GroupId } & Partial<Group>;
  export type GroupRemoved = GroupId;

  export type SetCustomGroupVolume = {
    groupId: GroupId;
    deviceId: DeviceId;
  } & Partial<VolumeProperties>;
  export type SetCustomGroupPosition = {
    groupId: GroupId;
    deviceId: DeviceId;
  } & Partial<ThreeDimensionalProperties>;
  export type RemoveCustomGroupVolume = CustomizedGroupVolumeId;
  export type RemoveCustomGroupPosition = CustomizedGroupPositionId;
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
  export type ChangeStageMember = { _id: StageMemberId } & Partial<StageMember>;
  export type RemoveStageMember = StageMemberId;
  export type StageMemberChanged = {
    _id: StageMemberId;
  } & Partial<StageMember>;
  export type SetCustomStageMemberVolume = {
    stageMemberId: StageMemberId;
    deviceId: DeviceId;
  } & Partial<VolumeProperties>;
  export type SetCustomStageMemberPosition = {
    stageMemberId: StageMemberId;
    deviceId: DeviceId;
  } & Partial<ThreeDimensionalProperties>;
  export type RemoveCustomStageMemberVolume = CustomizedStageMemberVolumeId;
  export type RemoveCustomStageMemberPosition = CustomizedStageMemberPositionId;
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

  /* AUDIO TRACKS */
  export type CreateLocalAudioTrack = Partial<Omit<LocalAudioTrack, "id">>;
  export type ChangeLocalAudioTrack = {
    _id: LocalAudioTrackId;
  } & Partial<LocalAudioTrack>;
  export type RemoveLocalAudioTrack = LocalAudioTrackId;
  export type LocalAudioTrackAdded = LocalAudioTrack;
  export type LocalAudioTrackChanged = {
    _id: LocalAudioTrackId;
  } & Partial<LocalAudioTrack>;
  export type LocalAudioTrackRemoved = LocalAudioTrackId;

  export type ChangeRemoteAudioTrack = {
    _id: RemoteAudioTrackId;
  } & Partial<RemoteAudioTrack>;
  export type RemoteAudioTrackAdded = RemoteAudioTrack;
  export type RemoteAudioTrackChanged = {
    _id: RemoteAudioTrackId;
  } & Partial<RemoteAudioTrack>;
  export type RemoteAudioTrackRemoved = RemoteAudioTrackId;

  export type SetCustomRemoteAudioTrackVolume = {
    remoteAudioTrackId: RemoteAudioTrackId;
    deviceId: DeviceId;
  } & Partial<VolumeProperties>;
  export type SetCustomRemoteAudioTrackPosition = {
    remoteAudioTrackId: RemoteAudioTrackId;
    deviceId: DeviceId;
  } & Partial<ThreeDimensionalProperties>;
  export type RemoveCustomRemoteAudioTrackVolume = CustomizedRemoteAudioTrackVolumeId;
  export type RemoveCustomRemoteAudioTrackPosition = CustomizedRemoteAudioTrackPositionId;
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

export default Payloads;
