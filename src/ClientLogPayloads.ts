type BaseReport = {
    /**
     * Unique device ID, is unique for each browser window
     * @see Device
     **/
    deviceId: string
    /**
     * Unique user ID
     * @see User
     **/
    userId: string
    /** Unique email for this user **/
    email: string
    /**
     * Unique ID of stage, where the user is currently logged in
     * @see Stage
     **/
    stageId: string
}

type BasePeerReport = BaseReport & {
    /** Device ID of the other peer **/
    targetDeviceId: string
}

/**
 * The payloads describes the body of all log REST queries according the central logging service
 * @see ClientLogEvents
 * @example
 * https://myloggingserivce/p-connecting
 */
declare namespace ClientLogPayloads {
    export type Ready = BaseReport

    export type PeerConnecting = BasePeerReport

    export type PeerConnected = BasePeerReport

    export type PeerIceFailed = BasePeerReport & {
        /** Short reason describing why the ICE process failed **/
        reason?: string
    }

    export type PeerDisconnected = BasePeerReport

    export type PeerStats = BasePeerReport & {
        stats: RTCStatsReport
    }
}
export { ClientLogPayloads }
