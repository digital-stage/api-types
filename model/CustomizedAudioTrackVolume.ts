import {RemoteAudioTrackId, CustomizedAudioTrackId} from "../IdTypes";

interface CustomizedAudioTrackVolume {
    id: CustomizedAudioTrackId;
    audioTrackId: RemoteAudioTrackId;

    volume: number;
    muted: boolean;
}

export default CustomizedAudioTrackVolume;
