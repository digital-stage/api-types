import {RemoteAudioTrackId, CustomizedRemoteAudioTrackPositionId, DeviceId, UserId} from "../IdTypes";
import VolumeProperties from "./VolumeProperties";

interface CustomRemoteAudioTrackVolume extends VolumeProperties {
    id: CustomizedRemoteAudioTrackPositionId;
    userId: UserId;
    deviceId: DeviceId;
    remoteAudioTrackId: RemoteAudioTrackId;
}

export default CustomRemoteAudioTrackVolume;
