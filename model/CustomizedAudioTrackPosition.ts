import {RemoteAudioTrackId, CustomizedAudioTrackPositionId} from "../IdTypes";

interface CustomizedAudioTrackPosition {
    id: CustomizedAudioTrackPositionId;
    audioTrackId: RemoteAudioTrackId;

    x: number;
    y: number;
    z: number;
    rX: number;
    rY: number;
    rZ: number;
}

export default CustomizedAudioTrackPosition;
