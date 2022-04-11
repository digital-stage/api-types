import { StageStatistic } from './StageStatistic'

export type RouterStatistic = {
    routerId: string
    ipv4: string
    ipv6?: string
    url: string

    jammer: boolean
    jammerMinPort?: number
    jammerMaxPort?: number
    jammerCount?: number
    jammerAvailable?: number

    mediasoup: boolean
    mediasoupMinPort?: number
    mediasoupMaxPort?: number
    mediasoupCount?: number
    mediasoupAvailable?: number

    apiServerId: string

    stages: StageStatistic[]
}
