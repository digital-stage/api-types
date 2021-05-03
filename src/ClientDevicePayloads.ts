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
import SoundCard from './model/SoundCard'
import StageDevice from './model/StageDevice'
import CustomStageDeviceVolume from './model/CustomStageDeviceVolume'

namespace ClientDevicePayloads {
    export type PayloadIdType = string
    export type CustomGroupPositionId = PayloadIdType
    export type CustomGroupVolumeId = PayloadIdType
    export type CustomStageMemberPositionId = PayloadIdType
    export type CustomStageMemberVolumeId = PayloadIdType
    export type CustomStageDevicePositionId = PayloadIdType
    export type CustomStageDeviceVolumeId = PayloadIdType
    export type CustomRemoteAudioTrackPositionId = PayloadIdType
    export type CustomRemoteAudioTrackVolumeId = PayloadIdType
    export type DeviceId = PayloadIdType
    export type GroupId = PayloadIdType
    export type LocalAudioTrackId = PayloadIdType
    export type RemoteAudioTrackId = PayloadIdType
    export type StageId = PayloadIdType
    export type StageMemberId = PayloadIdType
    export type StageDeviceId = PayloadIdType
    export type UserId = PayloadIdType
    export type RouterId = PayloadIdType
    export type LocalVideoTrackId = PayloadIdType
    export type SoundCardId = PayloadIdType
    export type RemoteVideoTrackId = PayloadIdType

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

    /* SDUND CARD */
    export type SetSoundCard = { uuid: string } & Partial<SoundCard>
    export type ChangeSoundCard = { _id: SoundCardId } & Partial<SoundCard>

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
    export type RemoveCustomGroupVolume = CustomGroupVolumeId
    export type RemoveCustomGroupPosition = CustomGroupPositionId

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
    export type RemoveCustomStageMemberVolume = CustomStageMemberVolumeId
    export type RemoveCustomStageMemberPosition = CustomStageMemberPositionId
    export type CustomStageMemberVolumeAdded = CustomStageMemberVolume

    /* STAGE DEVICE */
    export type ChangeStageDevice = { _id: StageDeviceId } & Partial<StageDevice>
    export type RemoveStageDevice = StageDeviceId
    export type StageDeviceChanged = {
        _id: StageDeviceId
    } & Partial<StageDevice>
    export type SetCustomStageDeviceVolume = {
        stageDeviceId: StageDeviceId
        deviceId: DeviceId
    } & Partial<VolumeProperties>
    export type SetCustomStageDevicePosition = {
        stageDeviceId: StageDeviceId
        deviceId: DeviceId
    } & Partial<ThreeDimensionalProperties>
    export type RemoveCustomStageDeviceVolume = CustomStageDeviceVolumeId
    export type RemoveCustomStageDevicePosition = CustomStageDevicePositionId
    export type CustomStageDeviceVolumeAdded = CustomStageDeviceVolume

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
    export type RemoveCustomRemoteAudioTrackVolume = CustomRemoteAudioTrackVolumeId
    export type RemoveCustomRemoteAudioTrackPosition = CustomRemoteAudioTrackPositionId

    export interface JoinStage {
        stageId: string
        groupId: string
        password?: string
    }

    export type LeaveStageForGood = string
}

export default ClientDevicePayloads
