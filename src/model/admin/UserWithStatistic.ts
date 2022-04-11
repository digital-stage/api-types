import { User } from '../User'

export type UserWithStatistic<IDType> = User<IDType> & {
    online: boolean
    numStageMembers: number
    numStageDevices: number
    numStageDevicesOnline: number
    numAudioTracks: number
    numVideoTracks: number
    numWebRTCTracks: number
    numJammerTracks: number
}
