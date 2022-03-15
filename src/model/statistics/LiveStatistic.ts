import { StageStatistic } from './StageStatistic'

export type ExtendedStageStatistic = StageStatistic & {
    createdAt: number
    videoServed: boolean
    audioServed: boolean
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

export type LiveStatistic = {
    stageCount: number
    jammerStageCount: number
    // Keep in mind: each jammer stage is always a mediasoup stage
    mediasoupStageCount: number
    userCount: number
    stageMemberCount: number
    activeStageMemberCount: number
    stages: ExtendedStageStatistic[]
}
