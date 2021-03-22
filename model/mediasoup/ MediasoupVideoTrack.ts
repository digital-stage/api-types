import RemoteVideoTrack from "../VideoTrack";

interface MediasoupVideoTrack extends RemoteVideoTrack {
    type: "mediasoup";

    producerId: string;
}
export default MediasoupVideoTrack;
