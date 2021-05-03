import LocalAudioTrack from '../LocalAudioTrack';
interface MediasoupLocalAudioTrack<IdType = string> extends LocalAudioTrack<IdType> {
    type: 'mediasoup';
    producerId: string;
}
export default MediasoupLocalAudioTrack;
