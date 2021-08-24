import User from './User'
import Stage from './Stage'
import Group from './Group'
import CustomGroupPosition from './CustomGroupPosition'
import CustomStageMemberPosition from './CustomStageMemberPosition'
import StageMember from './StageMember'
import CustomGroupVolume from './CustomGroupVolume'
import CustomStageMemberVolume from './CustomStageMemberVolume'
import AudioTrack from './AudioTrack'
import VideoTrack from './VideoTrack'
import CustomAudioTrackPosition from './CustomAudioTrackPosition'
import CustomAudioTrackVolume from './CustomAudioTrackVolume'
import StageDevice from './StageDevice'
import CustomStageDeviceVolume from './CustomStageDeviceVolume'
import CustomStageDevicePosition from './CustomStageDevicePosition'

interface StagePackage<IdType = string> {
    users: User<IdType>[]

    stage?: Stage<IdType>
    groups?: Group<IdType>[]
    customGroupVolumes: CustomGroupVolume<IdType>[]
    customGroupPositions: CustomGroupPosition<IdType>[]
    stageMembers: StageMember<IdType>[]
    customStageMemberVolumes: CustomStageMemberVolume<IdType>[]
    customStageMemberPositions: CustomStageMemberPosition<IdType>[]
    stageDevices: StageDevice<IdType>[]
    customStageDeviceVolumes: CustomStageDeviceVolume<IdType>[]
    customStageDevicePositions: CustomStageDevicePosition<IdType>[]
    audioTracks: AudioTrack<IdType>[]
    videoTracks: VideoTrack<IdType>[]
    customAudioTrackPositions: CustomAudioTrackPosition<IdType>[]
    customAudioTrackVolumes: CustomAudioTrackVolume<IdType>[]
}

export { StagePackage }
