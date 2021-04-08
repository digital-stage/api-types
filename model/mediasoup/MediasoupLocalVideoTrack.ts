import LocalVideoTrack from '../LocalVideoTrack';

interface MediasoupLocalVideoTrack<IdType = string>
  extends LocalVideoTrack<IdType> {
  type: 'mediasoup';

  producerId: IdType;
}

export default MediasoupLocalVideoTrack;
