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

    SendP2POffer: 'send-p2p-offer',
    SendP2PAnswer: 'send-p2p-answer',
    SendIceCandidate: 'send-ice-candidate',
}
export default ClientDeviceEvents
