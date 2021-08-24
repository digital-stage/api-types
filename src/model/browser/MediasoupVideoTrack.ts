import VideoTrack from '../VideoTrack'

interface MediasoupVideoTrack<IdType = string> extends VideoTrack<IdType> {
    type: 'mediasoup'

    producerId: string
}

export { MediasoupVideoTrack }
