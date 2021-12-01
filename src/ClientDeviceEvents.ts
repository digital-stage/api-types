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

const ClientDeviceEvents = {
    SendChatMessage: 'send-message',
    ConnectAsRouter: 'router',
    ConnectWithToken: 'token',
    ChangeUser: 'change-user',
    RemoveUser: 'remove-user',
    ChangeDevice: 'change-device',
    RemoveDevice: 'remove-device',
    SetSoundCard: 'set-sound-card',
    ChangeSoundCard: 'change-sound-card',
    RemoveSoundCard: 'remove-sound-card',
    CreateStage: 'create-stage',
    ChangeStage: 'change-stage',
    RemoveStage: 'remove-stage',
    CreateGroup: 'create-group',
    ChangeGroup: 'change-group',
    RemoveGroup: 'remove-group',
    SetCustomGroup: 'set-custom-group',
    RemoveCustomGroup: 'remove-custom-group',
    SetCustomGroupVolume: 'set-custom-group-volume',
    SetCustomGroupPosition: 'set-custom-group-position',
    RemoveCustomGroupVolume: 'remove-custom-group-volume',
    RemoveCustomGroupPosition: 'remove-custom-group-position',

    ChangeStageMember: 'change-stage-member',
    RemoveStageMember: 'remove-stage-member',

    SetCustomStageMemberPosition: 'set-custom-stage-member-position',
    SetCustomStageMemberVolume: 'set-custom-stage-member-volume',
    RemoveCustomStageMemberPosition: 'remove-custom-stage-member-position',
    RemoveCustomStageMemberVolume: 'remove-custom-stage-member-volume',

    ChangeStageDevice: 'change-stage-device',
    RemoveStageDevice: 'remove-stage-device',

    SetCustomStageDevicePosition: 'set-custom-stage-device-position',
    SetCustomStageDeviceVolume: 'set-custom-stage-device-volume',
    RemoveCustomStageDevicePosition: 'remove-custom-stage-device-position',
    RemoveCustomStageDeviceVolume: 'remove-custom-stage-device-volume',

    CreateVideoTrack: 'create-video-track',
    ChangeVideoTrack: 'change-video-track',
    RemoveVideoTrack: 'remove-video-track',
    CreateAudioTrack: 'create-audio-track',
    ChangeAudioTrack: 'change-audio-track',
    RemoveAudioTrack: 'remove-audio-track',

    SetCustomAudioTrackPosition: 'set-audio-track-position',
    SetCustomAudioTrackVolume: 'set-audio-track-volume',
    RemoveCustomAudioTrackPosition: 'remove-audio-track-position',
    RemoveCustomAudioTrackVolume: 'remove-audio-track-volume',

    JoinStage: 'join-stage',
    LeaveStage: 'leave-stage',
    LeaveStageForGood: 'leave-stage-for-good',

    EncodeInviteCode: 'encode-invite',
    RevokeInviteCode: 'revoke-invite',
    DecodeInviteCode: 'decode-invite',

    SendP2PRestart: 'send-p2p-restart',
    SendP2POffer: 'send-p2p-offer',
    SendP2PAnswer: 'send-p2p-answer',
    SendIceCandidate: 'send-ice-candidate',
}
export { ClientDeviceEvents }
