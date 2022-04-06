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
    /** Curretn shortlisting of all tracks receiving */
    receiving: WebRTCTrackDescription[]
}
