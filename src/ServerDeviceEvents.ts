const ServerDeviceEvents = {
    UUIDSuggested: 'uuid',

    LocalDeviceReady: 'ldr',
    UserReady: 'u-r',
    Ready: 'ok',

    UserAdded: 'u-a',
    UserChanged: 'u-c',
    UserRemoved: 'u-r',

    ChatMessageSend: 'c',

    RouterAdded: 'r-a',
    RouterChanged: 'r-c',
    RouterRemoved: 'r-r',

    DeviceAdded: 'd-a',
    DeviceChanged: 'd-c',
    DeviceRemoved: 'd-r',

    SoundCardAdded: 'sc-a',
    SoundCardChanged: 'sc-c',
    SoundCardRemoved: 'sc-r',

    StageAdded: 's-a',
    StageChanged: 's-c',
    StageRemoved: 's-r',

    StageJoined: 's-j',
    StageLeft: 's-l',

    GroupAdded: 'g-a',
    GroupChanged: 'g-c',
    GroupRemoved: 'g-r',

    CustomGroupPositionAdded: 'c-g-p-a',
    CustomGroupPositionChanged: 'c-g-p-c',
    CustomGroupPositionRemoved: 'c-g-p-r',

    CustomGroupVolumeAdded: 'c-g-v-a',
    CustomGroupVolumeChanged: 'c-g-v-c',
    CustomGroupVolumeRemoved: 'c-g-v-r',

    StageMemberAdded: 'sm-a',
    StageMemberChanged: 'sm-c',
    StageMemberRemoved: 'sm-r',

    CustomStageMemberPositionAdded: 'c-sm-p-a',
    CustomStageMemberPositionChanged: 'c-sm-p-c',
    CustomStageMemberPositionRemoved: 'c-sm-p-r',

    CustomStageMemberVolumeAdded: 'c-sm-v-a',
    CustomStageMemberVolumeChanged: 'c-sm-v-c',
    CustomStageMemberVolumeRemoved: 'c-sm-v-r',

    StageDeviceAdded: 'sd-a',
    StageDeviceChanged: 'sd-c',
    StageDeviceRemoved: 'sd-r',

    CustomStageDevicePositionAdded: 'c-sd-p-a',
    CustomStageDevicePositionChanged: 'c-sd-p-c',
    CustomStageDevicePositionRemoved: 'c-sd-p-r',

    CustomStageDeviceVolumeAdded: 'c-sd-v-a',
    CustomStageDeviceVolumeChanged: 'c-sd-v-c',
    CustomStageDeviceVolumeRemoved: 'c-sd-v-r',

    VideoTrackAdded: 'v-a',
    VideoTrackChanged: 'v-c',
    VideoTrackRemoved: 'v-r',

    AudioTrackAdded: 'a-a',
    AudioTrackChanged: 'a-c',
    AudioTrackRemoved: 'a-r',

    CustomAudioTrackPositionAdded: 'c-a-p-a',
    CustomAudioTrackPositionChanged: 'c-a-p-c',
    CustomAudioTrackPositionRemoved: 'c-a-p-r',

    CustomAudioTrackVolumeAdded: 'c-a-v-a',
    CustomAudioTrackVolumeChanged: 'c-a-v-c',
    CustomAudioTrackVolumeRemoved: 'c-a-v-r',

    P2PAnswerSent: 'p2p',
    IceCandidateSent: 'ice',
}
export default ServerDeviceEvents
