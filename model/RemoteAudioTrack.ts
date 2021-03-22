import {RemoteAudioTrackId, StageMemberId} from "../IdTypes";

interface RemoteAudioTrack {
    id: RemoteAudioTrackId;
    stageMemberId: StageMemberId;

    volume: number;
    muted: boolean;

    x: number;
    y: number;
    z: number;
    rX: number;
    rY: number;
    rZ: number;

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

export default RemoteAudioTrack;
