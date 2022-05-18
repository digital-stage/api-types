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
import { SoundCard } from './model/SoundCard'
import { VideoTrack } from './model/VideoTrack'
import { CustomGroup } from './model/CustomGroup'
import { StageScene } from './model'

declare namespace ClientDevicePayloads {
    /* General type definitions */
    export type IdType = string
    export type CreatePayload<T extends { _id: IdType }> = Omit<T, '_id'>
    export type UpdatePayload<T extends { _id: IdType }> = Partial<T> & { _id: IdType }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export type SetPayload<T extends { _id: IdType }> = UpdatePayload<T>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export type DeletePayload<T extends { _id: IdType }> = IdType

    export interface ConnectWithToken {
        token: string
        device?: Partial<Omit<Device, '_id'>> & { uuid: string }
    }

    export type SendChatMessage = string

    /* USER */
    export type ChangeUser = UpdatePayload<Device>
    export type RemoveUser = void

    /* DEVICE */
    export type ChangeDevice = UpdatePayload<Device>
    export type RemoveDevice = IdType

    /* SDUND CARD */
    export type SetSoundCard = SetPayload<SoundCard>
    export type ChangeSoundCard = UpdatePayload<SoundCard>
    export type RemoveSoundCard = DeletePayload<SoundCard>

    /* STAGE */
    export type CreateStage = CreatePayload<Stage>
    export type ChangeStage = UpdatePayload<Stage>
    export type RemoveStage = DeletePayload<Stage>

    /* STAGE SCENES */
    export type CreateScene = {
        label: string
        stageId: IdType
    }
    export type ChangeScene = Partial<{
        label?: string
    }>
    export type RemoveScene = DeletePayload<StageScene>

    /* GROUP */
    export type CreateGroup = CreatePayload<Group>
    export type ChangeGroup = UpdatePayload<Group>
    export type RemoveGroup = DeletePayload<Group>

    /* CUSTOM GROUP */
    export type SetCustomGroup = SetPayload<CustomGroup>
    export type RemoveCustomGroup = DeletePayload<CustomGroup>

    /* STAGE MEMBER */
    export type CreateStageMember = CreatePayload<StageMember>
    export type ChangeStageMember = UpdatePayload<StageMember>
    export type RemoveStageMember = DeletePayload<StageMember>

    /* VIDEO TRACKS */
    export type CreateVideoTrack = CreatePayload<VideoTrack>
    export type ChangeVideoTrack = UpdatePayload<VideoTrack>
    export type SetVideoTrack = SetPayload<VideoTrack>
    export type RemoveVideoTrack = DeletePayload<VideoTrack>

    /* AUDIO TRACKS */
    export type CreateAudioTrack = CreatePayload<AudioTrack>
    export type ChangeAudioTrack = UpdatePayload<AudioTrack>
    export type SetAudioTrack = SetPayload<AudioTrack>
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
    /**
     * @deprecated Use initial value of offer to initiate restart of other peer
     */
    export type SendP2PRestart = {
        from: StageDeviceId
        to: StageDeviceId
    }
    export type SendP2POffer = {
        from: StageDeviceId
        to: StageDeviceId
        offer: RTCSessionDescriptionInit
        initial?: boolean
    }
    export type SendP2PAnswer = {
        from: StageDeviceId
        to: StageDeviceId
        answer: RTCSessionDescriptionInit
    }
    export type SendIceCandidate = {
        from: StageDeviceId
        to: StageDeviceId
        iceCandidate: RTCIceCandidateInit | null
    }
}
export { ClientDevicePayloads }
