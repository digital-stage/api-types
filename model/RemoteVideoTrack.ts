import {StageMemberId, RemoteVideoTrackId} from "../IdTypes";


interface RemoteVideoTrack {
    id: RemoteVideoTrackId;
    stageMemberId: StageMemberId;

    /**
     * The type of the producing device
     */
    type: string;
    /**
     * Type specific payload
     */
    data: {
        [id: string]: any;
    };
}

export default RemoteVideoTrack;
