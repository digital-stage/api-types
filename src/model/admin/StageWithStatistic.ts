import { Stage } from '../Stage'

export type StageWithStatistic<IDType> = Stage<IDType> & {
    numStageMembers: number
    numStageMembersOnline: number
    numStageDevices: number
    numStageDevicesOnline: number
    numAudioTracks: number
    numVideoTracks: number
    numWebRTCTracks: number
    numJammerTracks: number
}
