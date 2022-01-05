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
import { User } from './model/User'
import { CustomGroupVolume } from './model/CustomGroupVolume'
import { CustomGroupPosition } from './model/CustomGroupPosition'
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
import { CustomGroup } from './model/CustomGroup'

declare namespace ServerDevicePayloads {
    /* General type definitions */
    export type IdType = string
    export type CreatedPayload<T> = T & { _id: IdType }
    export type UpdatedPayload<T> = Partial<T> & { _id: IdType }
    export type DeletedPayload<T> = T & { _id: IdType }

    export type Ready = {
        turn?: {
            urls: string[]
            username: string
            credential: string
        }
    }

    export type RouterAdded = CreatedPayload<Router>
    export type RouterChanged = UpdatedPayload<Router>
    export type RouterRemoved = DeletedPayload<Router>

    export type UserAdded = CreatedPayload<User>
    export type UserReady = User
    export type UserChanged = UpdatedPayload<User>
    export type UserRemoved = DeletedPayload<User>

    export type ChatMessageSend = ChatMessage

    /* DEVICE */
    export type LocalDeviceReady = Device
    export type DeviceAdded = CreatedPayload<Device>
    export type DeviceChanged = UpdatedPayload<Device>
    export type DeviceRemoved = DeletedPayload<Device>
    export type SoundCardAdded = CreatedPayload<SoundCard>
    export type SoundCardChanged = UpdatedPayload<SoundCard>
    export type SoundCardRemoved = DeletedPayload<SoundCard>

    /* STAGE */
    export type StageAdded = CreatedPayload<Stage>
    export type StageChanged = UpdatedPayload<Stage>
    export type StageRemoved = DeletedPayload<Stage>
    export type StageJoined = {
        stageId: IdType
        stageMemberId: IdType
        groupId: IdType | null
    } & StagePackage

    /* GROUP */
    export type GroupAdded = CreatedPayload<Group>
    export type GroupChanged = UpdatedPayload<Group>
    export type GroupRemoved = DeletedPayload<Group>

    export type CustomGroupAdded = CreatedPayload<CustomGroup>
    export type CustomGroupChanged = UpdatedPayload<CustomGroup>
    export type CustomGroupRemoved = DeletedPayload<CustomGroup>

    export type CustomGroupVolumeAdded = CreatedPayload<CustomGroupVolume>
    export type CustomGroupVolumeChanged = UpdatedPayload<CustomGroupVolume>
    export type CustomGroupVolumeRemoved = DeletedPayload<CustomGroupVolume>

    export type CustomGroupPositionAdded = CreatedPayload<CustomGroupPosition>
    export type CustomGroupPositionChanged = UpdatedPayload<CustomGroupPosition>
    export type CustomGroupPositionRemoved = DeletedPayload<CustomGroupPosition>

    /* STAGE MEMBER */
    export type StageMemberAdded = CreatedPayload<StageMember>
    export type StageMemberChanged = UpdatedPayload<StageMember>
    export type StageMemberRemoved = DeletedPayload<StageMember>

    export type CustomStageMemberVolumeAdded = CreatedPayload<CustomStageMemberVolume>
    export type CustomStageMemberVolumeChanged = UpdatedPayload<CustomStageMemberVolume>
    export type CustomStageMemberVolumeRemoved = DeletedPayload<CustomStageMemberVolume>

    export type CustomStageMemberPositionAdded = CreatedPayload<CustomStageMemberPosition>
    export type CustomStageMemberPositionChanged = UpdatedPayload<CustomStageMemberPosition>
    export type CustomStageMemberPositionRemoved = DeletedPayload<CustomStageMemberPosition>

    /* STAGE DEVICE */
    export type StageDeviceAdded = CreatedPayload<StageDevice>
    export type StageDeviceChanged = UpdatedPayload<StageDevice>
    export type StageDeviceRemoved = DeletedPayload<StageDevice>

    export type CustomStageDeviceVolumeAdded = CreatedPayload<CustomStageDeviceVolume>
    export type CustomStageDeviceVolumeChanged = UpdatedPayload<CustomStageDeviceVolume>
    export type CustomStageDeviceVolumeRemoved = DeletedPayload<CustomStageDeviceVolume>

    export type CustomStageDevicePositionAdded = CreatedPayload<CustomStageDevicePosition>
    export type CustomStageDevicePositionChanged = UpdatedPayload<CustomStageDevicePosition>
    export type CustomStageDevicePositionRemoved = DeletedPayload<CustomStageDevicePosition>

    /* VIDEO TRACKS */
    export type VideoTrackAdded = CreatedPayload<VideoTrack>
    export type VideoTrackChanged = UpdatedPayload<VideoTrack>
    export type VideoTrackRemoved = DeletedPayload<VideoTrack>

    /* AUDIO TRACKS */
    export type AudioTrackAdded = CreatedPayload<AudioTrack>
    export type AudioTrackChanged = UpdatedPayload<AudioTrack>
    export type AudioTrackRemoved = DeletedPayload<AudioTrack>

    export type CustomAudioTrackVolumeAdded = CreatedPayload<CustomAudioTrackVolume>
    export type CustomAudioTrackVolumeChanged = UpdatedPayload<CustomAudioTrackVolume>
    export type CustomAudioTrackVolumeRemoved = DeletedPayload<CustomAudioTrackVolume>

    export type CustomAudioTrackPositionAdded = CreatedPayload<CustomAudioTrackPosition>
    export type CustomAudioTrackPositionChanged = UpdatedPayload<CustomAudioTrackPosition>
    export type CustomAudioTrackPositionRemoved = DeletedPayload<CustomAudioTrackPosition>

    /* WebRTC related */
    export type TurnServersChanged = string[]
    export type StageDeviceId = IdType
    export type P2PRestart = {
        from: StageDeviceId
        to: StageDeviceId
    }
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
