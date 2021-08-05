import VideoTrack from '../VideoTrack'

interface BrowserVideoTrack<IdType = string> extends VideoTrack<IdType> {
    type: 'browser'

    trackId: string
}

export default BrowserVideoTrack
