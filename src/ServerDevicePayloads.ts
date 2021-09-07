import { Stage } from './model/Stage'
import { Group } from './model/Group'
import { StageMember } from './model/StageMember'
import { AudioTrack } from './model/AudioTrack'
import { ThreeDimensionalProperties } from './model/ThreeDimensionalProperties'
import { User } from './model/User'
import { CustomGroupVolume } from './model/CustomGroupVolume'
import { CustomGroupPosition } from './model/CustomGroupPosition'
import { VolumeProperties } from './model/VolumeProperties'
import { CustomStageMemberVolume } from './model/CustomStageMemberVolume'
import { CustomStageMemberPosition } from './model/CustomStageMemberPosition'
import { CustomAudioTrackVolume } from './model/CustomAudioTrackVolume'
import { CustomAudioTrackPosition } from './model/CustomAudioTrackPosition'
import { StagePackage } from './model/StagePackage'
import { Router } from './model/Router'
import { Device } from './model/Device'
import { SoundCard } from './model/SoundCard'
import { ChatMessage } from './model/ChatMessage'
import { VideoTrack } from './model/VideoTrack'
import { StageDevice } from './model/StageDevice'
import { CustomStageDeviceVolume } from './model/CustomStageDeviceVolume'
import { CustomStageDevicePosition } from './model/CustomStageDevicePosition'

declare namespace ServerDevicePayloads {
    export type PayloadIdType = string
    export type CustomGroupPositionId = PayloadIdType
    export type CustomGroupVolumeId = PayloadIdType
    export type CustomStageMemberPositionId = PayloadIdType
    export type CustomStageMemberVolumeId = PayloadIdType
    export type CustomStageDevicePositionId = PayloadIdType
    export type CustomStageDeviceVolumeId = PayloadIdType
    export type CustomAudioTrackPositionId = PayloadIdType
    export type CustomAudioTrackVolumeId = PayloadIdType
    export type DeviceId = PayloadIdType
    export type GroupId = PayloadIdType
    export type AudioTrackId = PayloadIdType
    export type StageId = PayloadIdType
    export type StageMemberId = PayloadIdType
    export type StageDeviceId = PayloadIdType
    export type UserId = PayloadIdType
    export type RouterId = PayloadIdType
    export type SoundCardId = PayloadIdType
    export type VideoTrackId = PayloadIdType

    export type Ready = {
        turn?: {
            urls: string[]
            username: string
            credential: string
        }
    }

    export type RouterAdded = Router
    export type RouterChanged = { _id: RouterId } & Partial<Router>
    export type RouterRemoved = UserId

    export type UserAdded = User
    export type UserReady = User
    export type UserChanged = { _id: UserId } & Partial<User>
    export type UserRemoved = UserId

    export type ChatMessageSend = ChatMessage

    /* DEVICE */
    export type LocalDeviceReady = Device
    export type DeviceAdded = Device
    export type DeviceChanged = { _id: DeviceId } & Partial<Device>
    export type DeviceRemoved = DeviceId
    export type SoundCardAdded = SoundCard
    export type SoundCardChanged = { _id: DeviceId } & Partial<SoundCard>
    export type SoundCardRemoved = SoundCardId

    /* STAGE */
    export type StageAdded = Stage
    export type StageChanged = { _id: StageId } & Partial<Stage>
    export type StageRemoved = StageId
    export type StageJoined = {
        stageId: StageId
        stageMemberId: StageMemberId
        groupId: GroupId
    } & StagePackage

    /* GROUP */
    export type GroupAdded = Group
    export type GroupChanged = { _id: GroupId } & Partial<Group>
    export type GroupRemoved = GroupId

    export type CustomGroupVolumeAdded = CustomGroupVolume
    export type CustomGroupVolumeChanged = {
        _id: CustomGroupVolumeId
    } & Partial<VolumeProperties>
    export type CustomGroupVolumeRemoved = CustomGroupVolumeId
    export type CustomGroupPositionAdded = CustomGroupPosition
    export type CustomGroupPositionChanged = {
        _id: CustomGroupPositionId
    } & Partial<ThreeDimensionalProperties>
    export type CustomGroupPositionRemoved = CustomGroupPositionId

    /* STAGE MEMBER */
    export type StageMemberAdded = StageMember
    export type StageMemberChanged = {
        _id: StageMemberId
    } & Partial<StageMember>
    export type StageMemberRemoved = StageMemberId
    export type CustomStageMemberVolumeAdded = CustomStageMemberVolume
    export type CustomStageMemberVolumeChanged = {
        _id: CustomStageMemberVolumeId
    } & Partial<VolumeProperties>
    export type CustomStageMemberVolumeRemoved = CustomStageMemberVolumeId
    export type CustomStageMemberPositionAdded = CustomStageMemberPosition
    export type CustomStageMemberPositionChanged = {
        _id: CustomStageMemberPositionId
    } & Partial<ThreeDimensionalProperties>
    export type CustomStageMemberPositionRemoved = CustomStageMemberPositionId

    /* STAGE DEVICE */
    export type StageDeviceAdded = StageDevice
    export type StageDeviceChanged = {
        _id: StageDeviceId
    } & Partial<StageDevice>
    export type StageDeviceRemoved = StageDeviceId
    export type CustomStageDeviceVolumeAdded = CustomStageDeviceVolume
    export type CustomStageDeviceVolumeChanged = {
        _id: CustomStageDeviceVolumeId
    } & Partial<VolumeProperties>
    export type CustomStageDeviceVolumeRemoved = CustomStageDeviceVolumeId
    export type CustomStageDevicePositionAdded = CustomStageDevicePosition
    export type CustomStageDevicePositionChanged = {
        _id: CustomStageDevicePositionId
    } & Partial<ThreeDimensionalProperties>
    export type CustomStageDevicePositionRemoved = CustomStageDevicePositionId

    /* VIDEO TRACKS */
    export type VideoTrackAdded = VideoTrack
    export type VideoTrackChanged = {
        _id: VideoTrackId
    } & Partial<VideoTrack>
    export type VideoTrackRemoved = VideoTrackId

    /* AUDIO TRACKS */
    export type AudioTrackAdded = AudioTrack
    export type AudioTrackChanged = {
        _id: AudioTrackId
    } & Partial<AudioTrack>
    export type AudioTrackRemoved = AudioTrackId

    export type CustomAudioTrackVolumeAdded = CustomAudioTrackVolume
    export type CustomAudioTrackVolumeChanged = {
        _id: CustomAudioTrackVolumeId
    } & Partial<VolumeProperties>
    export type CustomAudioTrackVolumeRemoved = CustomAudioTrackVolumeId
    export type CustomAudioTrackPositionAdded = CustomAudioTrackPosition
    export type CustomAudioTrackPositionChanged = {
        _id: CustomAudioTrackPositionId
    } & Partial<ThreeDimensionalProperties>
    export type CustomAudioTrackPositionRemoved = CustomAudioTrackPositionId

    /* WebRTC related */
    export type TurnServersChanged = string[]
    export type P2POfferSent = {
        from: StageDeviceId
        to: StageDeviceId
        offer: RTCSessionDescriptionInit
    }
    export type P2PAnswerSent = {
        from: StageDeviceId
        to: StageDeviceId
        answer: RTCSessionDescriptionInit
    }
    export type IceCandidateSent = {
        from: StageDeviceId
        to: StageDeviceId
        iceCandidate: RTCIceCandidate
    }
}

export { ServerDevicePayloads }
