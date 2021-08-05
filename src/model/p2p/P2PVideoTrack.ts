import VideoTrack from '../VideoTrack'

interface P2PVideoTrack<IdType = string> extends VideoTrack<IdType> {
    type: 'p2p'

    offer: RTCSessionDescriptionInit
}

export default P2PVideoTrack
