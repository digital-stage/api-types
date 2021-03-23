import {RemoteAudioTrackId, StageMemberId} from "../IdTypes";
import ThreeDimensionalProperties from "./ThreeDimensionalProperties";
import VolumeProperties from "./VolumeProperties";

interface RemoteAudioTrack extends ThreeDimensionalProperties, VolumeProperties {
    id: RemoteAudioTrackId;
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

export default RemoteAudioTrack;
