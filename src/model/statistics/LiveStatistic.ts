import { ExtendedStageStatistic } from './ExtendedStageStatistic'

export type LiveStatistic = {
    stageCount: number
    jammerStageCount: number
    // Keep in mind: each jammer stage is always a mediasoup stage
    mediasoupStageCount: number
    stages: ExtendedStageStatistic[]
}
