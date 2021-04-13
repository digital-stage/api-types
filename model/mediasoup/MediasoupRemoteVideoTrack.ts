import RemoteVideoTrack from '../RemoteVideoTrack'

interface MediasoupRemoteVideoTrack extends RemoteVideoTrack {
    type: 'mediasoup'

    producerId: string
}

export default MediasoupRemoteVideoTrack
