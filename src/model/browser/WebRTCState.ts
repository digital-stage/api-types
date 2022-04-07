import { WebRTCStatistics } from '../statistics/WebRTCStatistics'

export interface WebRTCTrackDescription {
    /**
     * Stream ID, is unique for each track. But cannot guarantee uniqueness, but web standards do (but browsers, too?)
     */
    streamId: string
    /**
     * Optional track ID, may NOT be unique globally, usually every browser generates its own
     */
    trackId?: string
    /**
     * Indicates if the track is muted
     */
    muted?: boolean
    /**
     * Kind of track, may be video, audio or data (byte array over data channel)
     */
    kind: 'video' | 'audio' | 'data'
}

export interface WebRTCState {
    /** Stage Device ID of the other peer * */
    targetDeviceId: string
    /** Indicates if this peer is polite **/
    polite: boolean
    /** The current connection state */
    connectionState: RTCPeerConnectionState
    /** The current ICE connection state */
    iceConnectionState: RTCIceConnectionState
    /** The current signaling state */
    signalingState: RTCSignalingState
    /** Current shortlisting of all tracks sending */
    sending: WebRTCTrackDescription[]
    /** Current shortlisting of all tracks receiving */
    receiving: WebRTCTrackDescription[]
}

export interface WebRTCAdditional {
    /**
     * Added on any track or stream related event
     */
    streamId?: string
    /**
     * Added on any session description related event
     */
    type?: RTCSdpType
    /**
     * Added by some events (e.g. create-offer-skipped)
     */
    reason?: string
    candidate?: RTCIceCandidateInit | null
    warning?: string
    error?: Error
    iceError?: RTCPeerConnectionIceErrorEvent
    stats?: WebRTCStatistics
}
