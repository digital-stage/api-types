const ClientDeviceEvents = {
  SendChatMessage: 'send-message',
  ConnectAsRouter: 'router',
  ConnectWithToken: 'token',
  ChangeUser: 'change-user',
  RemoveUser: 'remove-user',
  ChangeDevice: 'change-device',
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

  CreateLocalVideoTrack: 'create-local-video-track',
  ChangeLocalVideoTrack: 'change-local-video-track',
  RemoveLocalVideoTrack: 'remove-local-video-track',
  CreateLocalAudioTrack: 'create-local-audio-track',
  ChangeLocalAudioTrack: 'change-local-audio-track',
  RemoveLocalAudioTrack: 'remove-local-audio-track',

  ChangeRemoteAudioTrack: 'change-remote-audio-track',

  SetCustomRemoteAudioTrackPosition: 'set-remote-audio-track-position',
  SetCustomRemoteAudioTrackVolume: 'set-remote-audio-track-volume',
  RemoveCustomRemoteAudioTrackPosition: 'remove-remote-audio-track-position',
  RemoveCustomRemoteAudioTrackVolume: 'remove-remote-audio-track-volume',

  JoinStage: 'join-stage',
  LeaveStage: 'leave-stage',
  LeaveStageForGood: 'leave-stage-for-good',
};
export default ClientDeviceEvents;
