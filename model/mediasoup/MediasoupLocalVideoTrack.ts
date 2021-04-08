import RemoteVideoTrack from "../RemoteVideoTrack";

interface MediasoupLocalVideoTrack<IdType = string>
  extends RemoteVideoTrack<IdType> {
  type: "mediasoup";

  producerId: IdType;
}
export default MediasoupLocalVideoTrack;
