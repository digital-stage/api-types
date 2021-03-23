import {RemoteAudioTrackId, CustomizedRemoteAudioTrackPositionId, DeviceId, UserId} from "../IdTypes";
import ThreeDimensionalProperties from "./ThreeDimensionalProperties";

interface CustomRemoteAudioTrackPosition extends ThreeDimensionalProperties {
    id: CustomizedRemoteAudioTrackPositionId;
    userId: UserId;
    deviceId: DeviceId;
    remoteAudioTrackId: RemoteAudioTrackId;
}

export default CustomRemoteAudioTrackPosition;
