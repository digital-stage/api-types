interface JammerStageStatistic {
    _id: string
    name: string

    jammerRouter?: {
        ipv4: string
        ipv6?: string
        port: number
    }
}

/**
 * List of ONLY jammer related stages
 */
type JammerStagesStatistic = JammerStageStatistic[]

export { JammerStagesStatistic, JammerStageStatistic }
