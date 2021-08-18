import VideoTrack from '../VideoTrack'

interface WebRTCVideoTrack<IdType = string> extends VideoTrack<IdType> {
    type: 'browser'

    trackId: string
}

export default WebRTCVideoTrack
