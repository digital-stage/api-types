import Stage from './model/Stage';
import Group from './model/Group';
import StageMember from './model/StageMember';
import RemoteAudioTrack from './model/RemoteAudioTrack';
import ThreeDimensionalProperties from './model/ThreeDimensionalProperties';
import User from './model/User';
import CustomGroupVolume from './model/CustomGroupVolume';
import CustomGroupPosition from './model/CustomGroupPosition';
import VolumeProperties from './model/VolumeProperties';
import CustomStageMemberVolume from './model/CustomStageMemberVolume';
import CustomStageMemberPosition from './model/CustomStageMemberPosition';
import LocalAudioTrack from './model/LocalAudioTrack';
import CustomRemoteAudioTrackVolume from './model/CustomRemoteAudioTrackVolume';
import CustomRemoteAudioTrackPosition from './model/CustomRemoteAudioTrackPosition';
import StagePackage from './model/StagePackage';
import LocalVideoTrack from './model/LocalVideoTrack';
import Router from './model/Router';
import Device from './model/Device';
import SoundCard from './model/SoundCard';
import ChatMessage from './model/ChatMessage';
import RemoteVideoTrack from './model/RemoteVideoTrack';
import StageDevice from './model/StageDevice';
import CustomStageDeviceVolume from './model/CustomStageDeviceVolume';
import CustomStageDevicePosition from './model/CustomStageDevicePosition';
declare namespace ServerDevicePayloads {
    type PayloadIdType = string;
    type CustomGroupPositionId = PayloadIdType;
    type CustomGroupVolumeId = PayloadIdType;
    type CustomStageMemberPositionId = PayloadIdType;
    type CustomStageMemberVolumeId = PayloadIdType;
    type CustomStageDevicePositionId = PayloadIdType;
    type CustomStageDeviceVolumeId = PayloadIdType;
    type CustomRemoteAudioTrackPositionId = PayloadIdType;
    type CustomRemoteAudioTrackVolumeId = PayloadIdType;
    type DeviceId = PayloadIdType;
    type GroupId = PayloadIdType;
    type LocalAudioTrackId = PayloadIdType;
    type RemoteAudioTrackId = PayloadIdType;
    type StageId = PayloadIdType;
    type StageMemberId = PayloadIdType;
    type StageDeviceId = PayloadIdType;
    type UserId = PayloadIdType;
    type RouterId = PayloadIdType;
    type LocalVideoTrackId = PayloadIdType;
    type SoundCardId = PayloadIdType;
    type RemoteVideoTrackId = PayloadIdType;
    type RouterAdded = Router;
    type RouterChanged = {
        _id: RouterId;
    } & Partial<Router>;
    type RouterRemoved = UserId;
    type UserChanged = {
        _id: UserId;
    } & Partial<User>;
    type UserReady = User;
    type RemoteUserAdded = User;
    type RemoteUserChanged = {
        _id: UserId;
    } & Partial<User>;
    type RemoteUserRemoved = UserId;
    type ChatMessageSend = ChatMessage;
    type LocalDeviceReady = Device;
    type DeviceAdded = Device;
    type DeviceChanged = {
        _id: DeviceId;
    } & Partial<Device>;
    type DeviceRemoved = DeviceId;
    type SoundCardAdded = SoundCard;
    type SoundCardChanged = {
        _id: DeviceId;
    } & Partial<SoundCard>;
    type SoundCardRemoved = SoundCardId;
    type StageAdded = Stage;
    type StageChanged = {
        _id: StageId;
    } & Partial<Stage>;
    type StageRemoved = StageId;
    type StageJoined = {
        stageId: StageId;
        stageMemberId: StageMemberId;
        groupId: GroupId;
    } & StagePackage;
    type GroupAdded = Group;
    type GroupChanged = {
        _id: GroupId;
    } & Partial<Group>;
    type GroupRemoved = GroupId;
    type CustomGroupVolumeAdded = CustomGroupVolume;
    type CustomGroupVolumeChanged = {
        _id: CustomGroupVolumeId;
    } & Partial<VolumeProperties>;
    type CustomGroupVolumeRemoved = CustomGroupVolumeId;
    type CustomGroupPositionAdded = CustomGroupPosition;
    type CustomGroupPositionChanged = {
        _id: CustomGroupPositionId;
    } & Partial<ThreeDimensionalProperties>;
    type CustomGroupPositionRemoved = CustomGroupPositionId;
    type StageMemberAdded = StageMember;
    type StageMemberChanged = {
        _id: StageMemberId;
    } & Partial<StageMember>;
    type StageMemberRemoved = StageMemberId;
    type CustomStageMemberVolumeAdded = CustomStageMemberVolume;
    type CustomStageMemberVolumeChanged = {
        _id: CustomStageMemberVolumeId;
    } & Partial<VolumeProperties>;
    type CustomStageMemberVolumeRemoved = CustomStageMemberVolumeId;
    type CustomStageMemberPositionAdded = CustomStageMemberPosition;
    type CustomStageMemberPositionChanged = {
        _id: CustomStageMemberPositionId;
    } & Partial<ThreeDimensionalProperties>;
    type CustomStageMemberPositionRemoved = CustomStageMemberPositionId;
    type StageDeviceAdded = StageDevice;
    type StageDeviceChanged = {
        _id: StageDeviceId;
    } & Partial<StageDevice>;
    type StageDeviceRemoved = StageDeviceId;
    type CustomStageDeviceVolumeAdded = CustomStageDeviceVolume;
    type CustomStageDeviceVolumeChanged = {
        _id: CustomStageDeviceVolumeId;
    } & Partial<VolumeProperties>;
    type CustomStageDeviceVolumeRemoved = CustomStageDeviceVolumeId;
    type CustomStageDevicePositionAdded = CustomStageDevicePosition;
    type CustomStageDevicePositionChanged = {
        _id: CustomStageDevicePositionId;
    } & Partial<ThreeDimensionalProperties>;
    type CustomStageDevicePositionRemoved = CustomStageDevicePositionId;
    type LocalVideoTrackAdded = LocalVideoTrack;
    type LocalVideoTrackChanged = {
        _id: LocalVideoTrackId;
    } & Partial<LocalVideoTrack>;
    type LocalVideoTrackRemoved = LocalVideoTrackId;
    type RemoteVideoTrackAdded = RemoteVideoTrack;
    type RemoteVideoTrackChanged = {
        _id: RemoteVideoTrackId;
    } & Partial<RemoteVideoTrack>;
    type RemoteVideoTrackRemoved = RemoteVideoTrackId;
    type LocalAudioTrackAdded = LocalAudioTrack;
    type LocalAudioTrackChanged = {
        _id: LocalAudioTrackId;
    } & Partial<LocalAudioTrack>;
    type LocalAudioTrackRemoved = LocalAudioTrackId;
    type RemoteAudioTrackAdded = RemoteAudioTrack;
    type RemoteAudioTrackChanged = {
        _id: RemoteAudioTrackId;
    } & Partial<RemoteAudioTrack>;
    type RemoteAudioTrackRemoved = RemoteAudioTrackId;
    type CustomRemoteAudioTrackVolumeAdded = CustomRemoteAudioTrackVolume;
    type CustomRemoteAudioTrackVolumeChanged = {
        _id: CustomRemoteAudioTrackVolumeId;
    } & Partial<VolumeProperties>;
    type CustomRemoteAudioTrackVolumeRemoved = CustomRemoteAudioTrackVolumeId;
    type CustomRemoteAudioTrackPositionAdded = CustomRemoteAudioTrackPosition;
    type CustomRemoteAudioTrackPositionChanged = {
        _id: CustomRemoteAudioTrackPositionId;
    } & Partial<ThreeDimensionalProperties>;
    type CustomRemoteAudioTrackPositionRemoved = CustomRemoteAudioTrackPositionId;
}
export default ServerDevicePayloads;
