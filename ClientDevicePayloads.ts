import Stage from './model/Stage'
import Group from './model/Group'
import StageMember from './model/StageMember'
import RemoteAudioTrack from './model/RemoteAudioTrack'
import ThreeDimensionalProperties from './model/ThreeDimensionalProperties'
import VolumeProperties from './model/VolumeProperties'
import CustomStageMemberVolume from './model/CustomStageMemberVolume'
import LocalAudioTrack from './model/LocalAudioTrack'
import LocalVideoTrack from './model/LocalVideoTrack'
import Device from './model/Device'
import Router from './model/Router'

namespace ClientDevicePayloads {
    export type PayloadIdType = string
    export type CustomizedRemoteAudioTrackPositionId = PayloadIdType
    export type CustomizedRemoteAudioTrackVolumeId = PayloadIdType
    export type CustomizedGroupPositionId = PayloadIdType
    export type CustomizedGroupVolumeId = PayloadIdType
    export type CustomizedStageMemberPositionId = PayloadIdType
    export type CustomizedStageMemberVolumeId = PayloadIdType
    export type DeviceId = PayloadIdType
    export type GroupId = PayloadIdType
    export type LocalVideoTrackId = PayloadIdType
    export type LocalAudioTrackId = PayloadIdType
    export type RemoteAudioTrackId = PayloadIdType
    export type StageId = PayloadIdType
    export type StageMemberId = PayloadIdType
    export type UserId = PayloadIdType
    export type RouterId = PayloadIdType

    export type RouterAdded = Router
    export type RouterChanged = { _id: RouterId } & Partial<Router>
    export type RouterRemoved = UserId

    export type SendChatMessage = string

    export interface ChangeUser {
        name: string
        avatarUrl?: string
    }

    /* DEVICE */
    export type ChangeDevice = { _id: DeviceId } & Partial<Device>

    /* STAGE */
    export type CreateStage = Omit<Stage, '_id'>
    export type ChangeStage = { _id: StageId } & Partial<Stage>
    export type RemoveStage = StageId

    /* GROUP */
    export type CreateGroup = Partial<Omit<Group, '_id'>> & {
        stageId: StageId
    }
    export type ChangeGroup = { _id: GroupId } & Partial<Group>
    export type RemoveGroup = GroupId

    export type SetCustomGroupVolume = {
        groupId: GroupId
        deviceId: DeviceId
    } & Partial<VolumeProperties>
    export type SetCustomGroupPosition = {
        groupId: GroupId
        deviceId: DeviceId
    } & Partial<ThreeDimensionalProperties>
    export type RemoveCustomGroupVolume = CustomizedGroupVolumeId
    export type RemoveCustomGroupPosition = CustomizedGroupPositionId

    /* STAGE MEMBER */
    export type ChangeStageMember = { _id: StageMemberId } & Partial<StageMember>
    export type RemoveStageMember = StageMemberId
    export type StageMemberChanged = {
        _id: StageMemberId
    } & Partial<StageMember>
    export type SetCustomStageMemberVolume = {
        stageMemberId: StageMemberId
        deviceId: DeviceId
    } & Partial<VolumeProperties>
    export type SetCustomStageMemberPosition = {
        stageMemberId: StageMemberId
        deviceId: DeviceId
    } & Partial<ThreeDimensionalProperties>
    export type RemoveCustomStageMemberVolume = CustomizedStageMemberVolumeId
    export type RemoveCustomStageMemberPosition = CustomizedStageMemberPositionId
    export type CustomStageMemberVolumeAdded = CustomStageMemberVolume

    /* VIDEO TRACKS */
    export type CreateLocalVideoTrack = Partial<Omit<LocalVideoTrack, '_id'>>
    export type ChangeLocalVideoTrack = {
        _id: LocalVideoTrackId
    } & Partial<LocalVideoTrack>
    export type RemoveLocalVideoTrack = LocalVideoTrackId

    /* AUDIO TRACKS */
    export type CreateLocalAudioTrack = Partial<Omit<LocalAudioTrack, '_id'>>
    export type ChangeLocalAudioTrack = {
        _id: LocalAudioTrackId
    } & Partial<LocalAudioTrack>
    export type RemoveLocalAudioTrack = LocalAudioTrackId

    export type ChangeRemoteAudioTrack = {
        _id: RemoteAudioTrackId
    } & Partial<RemoteAudioTrack>

    export type SetCustomRemoteAudioTrackVolume = {
        remoteAudioTrackId: RemoteAudioTrackId
        deviceId: DeviceId
    } & Partial<VolumeProperties>
    export type SetCustomRemoteAudioTrackPosition = {
        remoteAudioTrackId: RemoteAudioTrackId
        deviceId: DeviceId
    } & Partial<ThreeDimensionalProperties>
    export type RemoveCustomRemoteAudioTrackVolume = CustomizedRemoteAudioTrackVolumeId
    export type RemoveCustomRemoteAudioTrackPosition = CustomizedRemoteAudioTrackPositionId

    export interface JoinStage {
        stageId: string
        groupId: string
        password?: string
    }

    export type LeaveStageForGood = string
}

export default ClientDevicePayloads
