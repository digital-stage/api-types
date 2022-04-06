export interface WebRTCStatistics {
    /**
     * Packet jitter in seconds
     */
    jitter?: number
    /**
     * Average jitter buffer delay in ms
     */
    jitterBufferDelay?: number
    /**
     * Average Round trip total in ms
     */
    roundTripTime?: number
    /**
     * Reduced content of an RTCStatsReport
     * @see RTCStatsReport
     * @see RTCStats
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stats: Record<string, any>
}
