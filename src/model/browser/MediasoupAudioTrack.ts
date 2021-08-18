import AudioTrack from '../AudioTrack'

interface MediasoupAudioTrack<IdType = string> extends AudioTrack<IdType> {
    type: 'mediasoup'

    producerId: string
}

export default MediasoupAudioTrack
