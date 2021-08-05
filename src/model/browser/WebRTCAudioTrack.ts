import AudioTrack from '../AudioTrack'

interface WebRTCAudioTrack<IdType = string> extends AudioTrack<IdType> {
    type: 'browser'

    trackId: string
}

export default WebRTCAudioTrack
