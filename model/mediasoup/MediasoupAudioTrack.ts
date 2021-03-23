import RemoteAudioTrack from "../AudioTrack";

interface MediasoupAudioTrack extends RemoteAudioTrack {
  type: "mediasoup";

  producerId: string;
}

export default MediasoupAudioTrack;
