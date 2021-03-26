const ServerDeviceEvents = {
  Ready: "ok",

  UserAdded: "u-a", // Never via socket
  UserChanged: "u-c",
  UserRemoved: "u-r", // Never via socket

  RemoteUserAdded: "r-u-a",
  RemoteUserChanged: "r-u-a",
  RemoteUserRemoved: "r-u-a",

  ChatMessageSend: "c",

  RouterAdded: "r-a",
  RouterChanged: "r-c",
  RouterRemoved: "r-r",

  DeviceAdded: "d-a",
  DeviceChanged: "d-c",
  DeviceRemoved: "d-r",

  SoundCardAdded: "sc-a",
  SoundCardChanged: "sc-c",
  SoundCardRemoved: "sc-r",

  StageAdded: "s-a",
  StageChanged: "s-c",
  StageRemoved: "s-r",

  StageJoined: "s-j",
  StageLeft: "s-l",

  GroupAdded: "g-a",
  GroupChanged: "g-c",
  GroupRemoved: "g-r",

  CustomGroupPositionAdded: "c-g-p-a",
  CustomGroupPositionChanged: "c-g-p-c",
  CustomGroupPositionRemoved: "c-g-p-r",

  CustomGroupVolumeAdded: "c-g-v-a",
  CustomGroupVolumeChanged: "c-g-v-c",
  CustomGroupVolumeRemoved: "c-g-v-r",

  StageMemberAdded: "sm-a",
  StageMemberChanged: "sm-c",
  StageMemberRemoved: "sm-r",

  CustomStageMemberPositionAdded: "c-sm-p-a",
  CustomStageMemberPositionChanged: "c-sm-p-c",
  CustomStageMemberPositionRemoved: "c-sm-p-r",

  CustomStageMemberVolumeAdded: "c-sm-v-a",
  CustomStageMemberVolumeChanged: "c-sm-v-c",
  CustomStageMemberVolumeRemoved: "c-sm-v-r",

  LocalAudioTrackAdded: "la-a",
  LocalAudioTrackChanged: "la-c",
  LocalAudioTrackRemoved: "la-r",

  LocalVideoTrackAdded: "la-a",
  LocalVideoTrackChanged: "la-c",
  LocalVideoTrackRemoved: "la-r",

  RemoteVideoTrackAdded: "v-a",
  RemoteVideoTrackChanged: "v-c",
  RemoteVideoTrackRemoved: "v-r",

  RemoteAudioTrackAdded: "a-a",
  RemoteAudioTrackChanged: "a-c",
  RemoteAudioTrackRemoved: "a-r",

  CustomRemoteAudioTrackPositionAdded: "c-sm-p-a",
  CustomRemoteAudioTrackPositionChanged: "c-sm-p-c",
  CustomRemoteAudioTrackPositionRemoved: "c-sm-p-r",

  CustomRemoteAudioTrackVolumeAdded: "c-sm-v-a",
  CustomRemoteAudioTrackVolumeChanged: "c-sm-v-c",
  CustomRemoteAudioTrackVolumeRemoved: "c-sm-v-r",
};
export default ServerDeviceEvents;
