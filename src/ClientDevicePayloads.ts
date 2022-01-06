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
import { Device } from './model/Device'
import { Router } from './model/Router'
import { SoundCard } from './model/SoundCard'
import { VideoTrack } from './model/VideoTrack'
import { CustomGroup } from './model/CustomGroup'

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

    /* STAGE MEMBER */
    export type CreateStageMember = CreatePayload<StageMember>
    export type ChangeStageMember = UpdatePayload<StageMember>
    export type RemoveStageMember = DeletePayload<StageMember>

    /* VIDEO TRACKS */
    export type CreateVideoTrack = CreatePayload<VideoTrack>
    export type ChangeVideoTrack = UpdatePayload<VideoTrack>
    export type RemoveVideoTrack = DeletePayload<VideoTrack>

    /* AUDIO TRACKS */
    export type CreateAudioTrack = CreatePayload<AudioTrack>
    export type ChangeAudioTrack = UpdatePayload<AudioTrack>
    export type RemoveAudioTrack = DeletePayload<AudioTrack>

    /* STAGE HANDLING */
    export interface JoinStage {
        stageId: IdType
        groupId?: IdType
        password?: string
    }
    export type StageId = IdType
    export type ForgetStage = StageId

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
