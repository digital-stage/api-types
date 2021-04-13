import Stage from '../Stage'

interface MediasoupStage extends Stage {
    type: 'mediasoup'

    mediasoup: {
        url: string
        port: number
    }
}
export default MediasoupStage
