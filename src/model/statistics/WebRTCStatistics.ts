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
    stats: RTCStatsReport
}
