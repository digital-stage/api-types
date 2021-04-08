import RemoteAudioTrack from "../RemoteAudioTrack";

interface MediasoupRemoteAudioTrack extends RemoteAudioTrack {
  type: "mediasoup";

  producerId: string;
}

export default MediasoupRemoteAudioTrack;
