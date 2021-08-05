import AudioTrack from '../AudioTrack'

interface P2PAudioTrack<IdType = string> extends AudioTrack<IdType> {
    type: 'p2p'

    offer: RTCSessionDescriptionInit
}

export default P2PAudioTrack
