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
import { CustomStageMemberVolume } from './model/CustomStageMemberVolume'
import { Device } from './model/Device'
import { Router } from './model/Router'
import { SoundCard } from './model/SoundCard'
import { StageDevice } from './model/StageDevice'
import { CustomStageDeviceVolume } from './model/CustomStageDeviceVolume'
import { VideoTrack } from './model/VideoTrack'
import {
    CustomAudioTrackPosition,
    CustomAudioTrackVolume,
    CustomGroup,
    CustomGroupPosition,
    CustomGroupVolume,
    CustomStageDevicePosition,
    CustomStageMemberPosition,
} from './model'

declare namespace ClientDevicePayloads {
    /* General type definitions */
    export type IdType = string
    export type CreatePayload<T> = T & { _id: IdType }
    export type UpdatePayload<T> = Partial<T> & { _id: IdType }
    export type SetPayload<T> = UpdatePayload<T>
    export type DeletePayload<T> = IdType

    export type RouterAdded = Router
    export type RouterChanged = { _id: IdType } & Partial<Router>
    export type RouterRemoved = IdType

    export type SendChatMessage = string

    /* DEVICE */
    export type ChangeDevice = UpdatePayload<Device>
    export type RemoveDevice = IdType

    /* SDUND CARD */
    export type CreateSoundCard = CreatePayload<SoundCard>
    export type ChangeSoundCard = UpdatePayload<SoundCard>
    export type RemoveSoundCard = DeletePayload<SoundCard>

    /* STAGE */
    export type CreateStage = CreatePayload<Stage>
    export type ChangeStage = UpdatePayload<Stage>
    export type RemoveStage = DeletePayload<Stage>

    /* GROUP */
    export type CreateGroup = CreatePayload<Group>
    export type ChangeGroup = UpdatePayload<Group>
    export type RemoveGroup = DeletePayload<Group>

    export type CreateCustomGroup = CreatePayload<CustomGroup>
    export type ChangeCustomGroup = UpdatePayload<CustomGroup>
    export type RemoveCustomGroup = DeletePayload<CustomGroup>

    export type CreateCustomGroupVolume = CreatePayload<CustomGroupVolume>
    export type ChangeCustomGroupVolume = UpdatePayload<CustomGroupVolume>
    export type RemoveCustomGroupVolume = DeletePayload<CustomGroupVolume>

    export type CreateCustomGroupPosition = CreatePayload<CustomGroupPosition>
    export type ChangeCustomGroupPosition = UpdatePayload<CustomGroupPosition>
    export type RemoveCustomGroupPosition = DeletePayload<CustomGroupPosition>

    /* STAGE MEMBER */
    export type CreateStageMember = CreatePayload<StageMember>
    export type ChangeStageMember = UpdatePayload<StageMember>
    export type RemoveStageMember = DeletePayload<StageMember>

    export type CreateCustomStageMemberVolume = CreatePayload<CustomStageMemberVolume>
    export type ChangeCustomStageMemberVolume = UpdatePayload<CustomStageMemberVolume>
    export type RemoveCustomStageMemberVolume = DeletePayload<CustomStageMemberVolume>

    export type CreateCustomStageMemberPosition = CreatePayload<CustomStageMemberPosition>
    export type ChangeCustomStageMemberPosition = UpdatePayload<CustomStageMemberPosition>
    export type RemoveCustomStageMemberPosition = DeletePayload<CustomStageMemberPosition>

    /* STAGE DEVICE */
    export type CreateStageDevice = CreatePayload<StageDevice>
    export type ChangeStageDevice = UpdatePayload<StageDevice>
    export type RemoveStageDevice = DeletePayload<StageDevice>

    export type CreateCustomStageDeviceVolume = CreatePayload<CustomStageDeviceVolume>
    export type ChangeCustomStageDeviceVolume = UpdatePayload<CustomStageDeviceVolume>
    export type RemoveCustomStageDeviceVolume = DeletePayload<CustomStageDeviceVolume>

    export type CreateCustomStageDevicePosition = CreatePayload<CustomStageDevicePosition>
    export type ChangeCustomStageDevicePosition = UpdatePayload<CustomStageDevicePosition>
    export type RemoveCustomStageDevicePosition = DeletePayload<CustomStageDevicePosition>

    /* VIDEO TRACKS */
    export type CreateVideoTrack = CreatePayload<VideoTrack>
    export type ChangeVideoTrack = UpdatePayload<VideoTrack>
    export type RemoveVideoTrack = DeletePayload<VideoTrack>

    /* AUDIO TRACKS */
    export type CreateAudioTrack = CreatePayload<AudioTrack>
    export type ChangeAudioTrack = UpdatePayload<AudioTrack>
    export type RemoveAudioTrack = DeletePayload<AudioTrack>

    export type CreateCustomAudioTrackVolume = CreatePayload<CustomAudioTrackVolume>
    export type ChangeCustomAudioTrackVolume = UpdatePayload<CustomAudioTrackVolume>
    export type RemoveCustomAudioTrackVolume = DeletePayload<CustomAudioTrackVolume>

    export type CreateCustomAudioTrackPosition = CreatePayload<CustomAudioTrackPosition>
    export type ChangeCustomAudioTrackPosition = UpdatePayload<CustomAudioTrackPosition>
    export type RemoveCustomAudioTrackPosition = DeletePayload<CustomAudioTrackPosition>

    /* STAGE HANDLING */
    export interface JoinStage {
        stageId: IdType
        groupId?: IdType
        password?: string
    }
    export type StageId = IdType
    export type LeaveStageForGood = StageId

    export type EncodeInviteCode = {
        stageId: IdType
        groupId?: IdType
    }
    export type RevokeInviteCode = EncodeInviteCode
    export type DecodeInviteCode = string

    /* WebRTC */
    export type StageDeviceId = IdType
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
        iceCandidate: RTCIceCandidate | null
    }
}
export { ClientDevicePayloads }
