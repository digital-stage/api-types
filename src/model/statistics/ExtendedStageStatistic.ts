import {StageStatistic} from './StageStatistic'

export type ExtendedStageStatistic = StageStatistic & {
    createdAt: number
    audioType: string
    videoType: string
    videoServed: boolean
    audioServed: boolean
    jammerPort?: number
    videos: {
        webrtc: number
        mediasoup: number
    }
    audioTracks: {
        webrtc: number
        jammer: number
        mediasoup: number
    }
}
