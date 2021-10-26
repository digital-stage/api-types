/*
 * Copyright (c) 2021 Tobias Hegemann
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Stage } from './model/Stage'
import { Group } from './model/Group'
import { StageMember } from './model/StageMember'
import { AudioTrack } from './model/AudioTrack'
import { ThreeDimensionalProperties } from './model/ThreeDimensionalProperties'
import { VolumeProperties } from './model/VolumeProperties'
import { CustomStageMemberVolume } from './model/CustomStageMemberVolume'
import { Device } from './model/Device'
import { Router } from './model/Router'
import { SoundCard } from './model/SoundCard'
import { StageDevice } from './model/StageDevice'
import { CustomStageDeviceVolume } from './model/CustomStageDeviceVolume'
import { VideoTrack } from './model/VideoTrack'

declare namespace ClientDevicePayloads {
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
    export type RemoveDevice = DeviceId

    /* SDUND CARD */
    export type SetSoundCard = {
        audioDriver: string
        type: 'input' | 'output'
        uuid: string
    } & Partial<SoundCard>
    export type ChangeSoundCard = { _id: SoundCardId } & Partial<SoundCard>

    /* STAGE */
    export type CreateStage = Partial<Omit<Stage, '_id'>>
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
    export type CreateVideoTrack = Partial<Omit<VideoTrack, '_id'>> & { stageId: StageId }
    export type ChangeVideoTrack = {
        _id: VideoTrackId
    } & Partial<VideoTrack>
    export type RemoveVideoTrack = VideoTrackId

    /* AUDIO TRACKS */
    export type CreateAudioTrack = Partial<Omit<AudioTrack, '_id'>> & { stageId: StageId }
    export type ChangeAudioTrack = {
        _id: AudioTrackId
    } & Partial<AudioTrack>
    export type RemoveAudioTrack = AudioTrackId

    export type SetCustomAudioTrackVolume = {
        audioTrackId: AudioTrackId
        deviceId: DeviceId
    } & Partial<VolumeProperties>
    export type SetCustomAudioTrackPosition = {
        audioTrackId: AudioTrackId
        deviceId: DeviceId
    } & Partial<ThreeDimensionalProperties>
    export type RemoveCustomAudioTrackVolume = CustomAudioTrackVolumeId
    export type RemoveCustomAudioTrackPosition = CustomAudioTrackPositionId

    export interface JoinStage {
        stageId: string
        groupId?: string
        password?: string
    }

    export type LeaveStageForGood = string

    export type EncodeInviteCode = {
        stageId: string
        groupId: string
    }
    export type RevokeInviteCode = EncodeInviteCode
    export type DecodeInviteCode = string

    export type SendP2PRestart = {
        from: StageDeviceId
        to: StageDeviceId
    }
    export type SendP2POffer = {
        from: StageDeviceId
        to: StageDeviceId
        offer: RTCSessionDescriptionInit
    }
    export type SendP2PAnswer = {
        from: StageDeviceId
        to: StageDeviceId
        answer: RTCSessionDescriptionInit
    }
    export type SendIceCandidate = {
        from: StageDeviceId
        to: StageDeviceId
        iceCandidate: RTCIceCandidate
    }
}
export { ClientDevicePayloads }
