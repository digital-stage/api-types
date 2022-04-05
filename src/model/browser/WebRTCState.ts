export interface WebRTCState {
    id: string
    signalingState: RTCSignalingState
    connectionState: RTCPeerConnectionState
    iceConnectionState: RTCIceConnectionState
    polite: boolean
}
