import Stage from './model/Stage';
import Group from './model/Group';
import StageMember from './model/StageMember';
import RemoteAudioTrack from './model/RemoteAudioTrack';
import ThreeDimensionalProperties from './model/ThreeDimensionalProperties';
import VolumeProperties from './model/VolumeProperties';
import CustomStageMemberVolume from './model/CustomStageMemberVolume';
import LocalAudioTrack from './model/LocalAudioTrack';
import LocalVideoTrack from './model/LocalVideoTrack';
import Device from './model/Device';
import Router from './model/Router';
import SoundCard from './model/SoundCard';
import StageDevice from './model/StageDevice';
import CustomStageDeviceVolume from './model/CustomStageDeviceVolume';
declare namespace ClientDevicePayloads {
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
    type SendChatMessage = string;
    interface ChangeUser {
        name: string;
        avatarUrl?: string;
    }
    type ChangeDevice = {
        _id: DeviceId;
    } & Partial<Device>;
    type SetSoundCard = {
        uuid: string;
    } & Partial<SoundCard>;
    type ChangeSoundCard = {
        _id: SoundCardId;
    } & Partial<SoundCard>;
    type CreateStage = Omit<Stage, '_id'>;
    type ChangeStage = {
        _id: StageId;
    } & Partial<Stage>;
    type RemoveStage = StageId;
    type CreateGroup = Partial<Omit<Group, '_id'>> & {
        stageId: StageId;
    };
    type ChangeGroup = {
        _id: GroupId;
    } & Partial<Group>;
    type RemoveGroup = GroupId;
    type SetCustomGroupVolume = {
        groupId: GroupId;
        deviceId: DeviceId;
    } & Partial<VolumeProperties>;
    type SetCustomGroupPosition = {
        groupId: GroupId;
        deviceId: DeviceId;
    } & Partial<ThreeDimensionalProperties>;
    type RemoveCustomGroupVolume = CustomGroupVolumeId;
    type RemoveCustomGroupPosition = CustomGroupPositionId;
    type ChangeStageMember = {
        _id: StageMemberId;
    } & Partial<StageMember>;
    type RemoveStageMember = StageMemberId;
    type StageMemberChanged = {
        _id: StageMemberId;
    } & Partial<StageMember>;
    type SetCustomStageMemberVolume = {
        stageMemberId: StageMemberId;
        deviceId: DeviceId;
    } & Partial<VolumeProperties>;
    type SetCustomStageMemberPosition = {
        stageMemberId: StageMemberId;
        deviceId: DeviceId;
    } & Partial<ThreeDimensionalProperties>;
    type RemoveCustomStageMemberVolume = CustomStageMemberVolumeId;
    type RemoveCustomStageMemberPosition = CustomStageMemberPositionId;
    type CustomStageMemberVolumeAdded = CustomStageMemberVolume;
    type ChangeStageDevice = {
        _id: StageDeviceId;
    } & Partial<StageDevice>;
    type RemoveStageDevice = StageDeviceId;
    type StageDeviceChanged = {
        _id: StageDeviceId;
    } & Partial<StageDevice>;
    type SetCustomStageDeviceVolume = {
        stageDeviceId: StageDeviceId;
        deviceId: DeviceId;
    } & Partial<VolumeProperties>;
    type SetCustomStageDevicePosition = {
        stageDeviceId: StageDeviceId;
        deviceId: DeviceId;
    } & Partial<ThreeDimensionalProperties>;
    type RemoveCustomStageDeviceVolume = CustomStageDeviceVolumeId;
    type RemoveCustomStageDevicePosition = CustomStageDevicePositionId;
    type CustomStageDeviceVolumeAdded = CustomStageDeviceVolume;
    type CreateLocalVideoTrack = Partial<Omit<LocalVideoTrack, '_id'>>;
    type ChangeLocalVideoTrack = {
        _id: LocalVideoTrackId;
    } & Partial<LocalVideoTrack>;
    type RemoveLocalVideoTrack = LocalVideoTrackId;
    type CreateLocalAudioTrack = Partial<Omit<LocalAudioTrack, '_id'>>;
    type ChangeLocalAudioTrack = {
        _id: LocalAudioTrackId;
    } & Partial<LocalAudioTrack>;
    type RemoveLocalAudioTrack = LocalAudioTrackId;
    type ChangeRemoteAudioTrack = {
        _id: RemoteAudioTrackId;
    } & Partial<RemoteAudioTrack>;
    type SetCustomRemoteAudioTrackVolume = {
        remoteAudioTrackId: RemoteAudioTrackId;
        deviceId: DeviceId;
    } & Partial<VolumeProperties>;
    type SetCustomRemoteAudioTrackPosition = {
        remoteAudioTrackId: RemoteAudioTrackId;
        deviceId: DeviceId;
    } & Partial<ThreeDimensionalProperties>;
    type RemoveCustomRemoteAudioTrackVolume = CustomRemoteAudioTrackVolumeId;
    type RemoveCustomRemoteAudioTrackPosition = CustomRemoteAudioTrackPositionId;
    interface JoinStage {
        stageId: string;
        groupId: string;
        password?: string;
    }
    type LeaveStageForGood = string;
}
export default ClientDevicePayloads;
