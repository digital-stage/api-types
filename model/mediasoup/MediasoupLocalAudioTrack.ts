import LocalAudioTrack from "../LocalAudioTrack";

interface MediasoupLocalAudioTrack<IdType = string>
  extends LocalAudioTrack<IdType> {
  type: "mediasoup";
  producer: any; // import { Producer } from 'mediasoup-client/lib/Producer';
  producerId: string;
}

export default MediasoupLocalAudioTrack;
