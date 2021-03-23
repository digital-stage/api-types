import Router from "./model/Router";
import Device from "./model/Device";
import {
    CustomizedRemoteAudioTrackPositionId,
    CustomizedRemoteAudioTrackVolumeId,
    CustomizedGroupPositionId, CustomizedGroupVolumeId, CustomizedStageMemberPositionId, CustomizedStageMemberVolumeId,
    DeviceId,
    GroupId, LocalAudioTrackId,
    RemoteAudioTrackId,
    StageId,
    StageMemberId, UserId
} from "./IdTypes";
import Stage from "./model/Stage";
import Group from "./model/Group";
import StageMember from "./model/StageMember";
import RemoteAudioTrack from "./model/RemoteAudioTrack";
import ThreeDimensionalProperties from "./model/ThreeDimensionalProperties";
import User from "./model/User";
import CustomGroupVolume from "./model/CustomizedGroupVolume";
import CustomGroupPosition from "./model/CustomizedGroupPosition";
import VolumeProperties from "./model/VolumeProperties";
import CustomStageMemberVolume from "./model/CustomizedStageMemberVolume";
import CustomStageMemberPosition from "./model/CustomStageMemberPosition";
import LocalAudioTrack from "./model/LocalAudioTrack";
import CustomRemoteAudioTrackVolume from "./model/CustomizedRemoteAudioTrackVolume";
import CustomRemoteAudioTrackPosition from "./model/CustomizedRemoteAudioTrackPosition";

namespace Payloads {
    export interface ConnectAsRouter {
        apiKey: string;
        router?: Omit<Router, "id">;
    }

    export interface ConnectWithToken {
        token: string;
        device?: Partial<Device> & { uuid: string };
    }

    /* USER */
    export interface ChangeUser {
        name: string;
        avatarUrl?: string;
    }

    export type UserChanged = { id: UserId } & Partial<User>;
    export type RemoteUserAdded = User;
    export type RemoteUserChanged = { id: UserId } & Partial<User>;
    export type RemoteUserRemoved = UserId;

    /* DEVICE */
    export type ChangeDevice = {id: DeviceId} & Partial<Device>;
    export type DeviceAdded = Device;
    export type DeviceChanged = { id: DeviceId } & Partial<Device>;
    export type DeviceRemoved = DeviceId;


    /* STAGE */
    export type CreateStage = Partial<Omit<Stage, "id">>;
    export type ChangeStage = { id: StageId } & Partial<Stage>;
    export type RemoveStage = StageId;
    export type StageAdded = Stage;
    export type StageChanged = { id: StageId } & Partial<Stage>;
    export type StageRemoved = StageId;


    /* GROUP */
    export type CreateGroup = Partial<Omit<Group, "id">> & { stageId: StageId };
    export type ChangeGroup = { id: GroupId } & Partial<Group>;
    export type RemoveGroup = GroupId;
    export type GroupAdded = Group;
    export type GroupChanged = { id: GroupId } & Partial<Group>;
    export type GroupRemoved = GroupId;

    export type SetCustomGroupVolume = { groupId: GroupId; deviceId: DeviceId } & Partial<VolumeProperties>;
    export type SetCustomGroupPosition = { groupId: GroupId; deviceId: DeviceId } & Partial<ThreeDimensionalProperties>;
    export type RemoveCustomGroupVolume = CustomizedGroupVolumeId;
    export type RemoveCustomGroupPosition = CustomizedGroupPositionId;
    export type CustomGroupVolumeAdded = CustomGroupVolume;
    export type CustomGroupVolumeChanged = { id: CustomizedGroupPositionId } & Partial<VolumeProperties>;
    export type CustomGroupVolumeRemoved = CustomizedGroupPositionId;
    export type CustomGroupPositionAdded = CustomGroupPosition;
    export type CustomGroupPositionChanged = { id: CustomizedGroupPositionId } & Partial<ThreeDimensionalProperties>;
    export type CustomGroupPositionRemoved = CustomizedGroupPositionId;


    /* STAGE MEMBER */
    export type ChangeStageMember = { id: StageMemberId } & Partial<StageMember>;
    export type RemoveStageMember = StageMemberId;
    export type StageMemberChanged = { id: StageMemberId } & Partial<StageMember>;
    export type SetCustomStageMemberVolume = { stageMemberId: StageMemberId; deviceId: DeviceId } & Partial<VolumeProperties>;
    export type SetCustomStageMemberPosition =
        { stageMemberId: StageMemberId; deviceId: DeviceId }
        & Partial<ThreeDimensionalProperties>;
    export type RemoveCustomStageMemberVolume = CustomizedStageMemberVolumeId;
    export type RemoveCustomStageMemberPosition = CustomizedStageMemberPositionId;
    export type CustomStageMemberVolumeAdded = CustomStageMemberVolume;
    export type CustomStageMemberVolumeChanged = { id: CustomizedStageMemberPositionId } & Partial<VolumeProperties>;
    export type CustomStageMemberVolumeRemoved = CustomizedStageMemberPositionId;
    export type CustomStageMemberPositionAdded = CustomStageMemberPosition;
    export type CustomStageMemberPositionChanged =
        { id: CustomizedStageMemberPositionId }
        & Partial<ThreeDimensionalProperties>;
    export type CustomStageMemberPositionRemoved = CustomizedStageMemberPositionId;


    /* AUDIO TRACKS */
    export type CreateLocalAudioTrack = Partial<Omit<LocalAudioTrack, "id">>;
    export type ChangeLocalAudioTrack = { id: LocalAudioTrackId } & Partial<LocalAudioTrack>;
    export type RemoveLocalAudioTrack = LocalAudioTrackId;
    export type LocalAudioTrackAdded = LocalAudioTrack;
    export type LocalAudioTrackChanged = { id: LocalAudioTrackId } & Partial<LocalAudioTrack>;
    export type LocalAudioTrackRemoved = LocalAudioTrackId;

    export type ChangeRemoteAudioTrack = { id: RemoteAudioTrackId } & Partial<RemoteAudioTrack>;
    export type RemoteAudioTrackAdded = RemoteAudioTrack;
    export type RemoteAudioTrackChanged = { id: RemoteAudioTrackId } & Partial<RemoteAudioTrack>;
    export type RemoteAudioTrackRemoved = RemoteAudioTrackId;

    export type SetCustomRemoteAudioTrackVolume =
        { remoteAudioTrackId: RemoteAudioTrackId; deviceId: DeviceId }
        & Partial<VolumeProperties>;
    export type SetCustomRemoteAudioTrackPosition =
        { remoteAudioTrackId: RemoteAudioTrackId; deviceId: DeviceId }
        & Partial<ThreeDimensionalProperties>;
    export type RemoveCustomRemoteAudioTrackVolume = CustomizedRemoteAudioTrackVolumeId;
    export type RemoveCustomRemoteAudioTrackPosition = CustomizedRemoteAudioTrackPositionId;
    export type CustomRemoteAudioTrackVolumeAdded = CustomRemoteAudioTrackVolume;
    export type CustomRemoteAudioTrackVolumeChanged = { id: CustomizedRemoteAudioTrackPositionId } & Partial<VolumeProperties>;
    export type CustomRemoteAudioTrackVolumeRemoved = CustomizedRemoteAudioTrackPositionId;
    export type CustomRemoteAudioTrackPositionAdded = CustomRemoteAudioTrackPosition;
    export type CustomRemoteAudioTrackPositionChanged =
        { id: CustomizedRemoteAudioTrackPositionId }
        & Partial<ThreeDimensionalProperties>;
    export type CustomRemoteAudioTrackPositionRemoved = CustomizedRemoteAudioTrackPositionId;

}

export default Payloads;
