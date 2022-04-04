export interface TrackDescription {
    // Should be unique across connections
    streamId: string
    // TrackIds are not unique
    trackId?: string
    kind: 'audio' | 'video' | 'data'
}

export interface WebRTCConnectionLogEntry {
    stageDeviceId: string
    remoteStageDeviceId: string
    timestamp: number
    connectionState: RTCPeerConnectionState
    iceState: RTCIceConnectionState
    signalingState: RTCSignalingState
    sending: TrackDescription[]
    receiving: TrackDescription[]
    // Refer to keys of ClientLogEvents
    event?: string
    // Optional message
    message?: string
    // Optional error
    error?: Error
}
