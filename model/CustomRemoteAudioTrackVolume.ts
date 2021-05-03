import VolumeProperties from './VolumeProperties'

interface CustomRemoteAudioTrackVolume<IdType = string> extends VolumeProperties {
    _id: IdType
    // UNIQUE PAIR
    deviceId: IdType
    remoteAudioTrackId: IdType
    // HELPER
    stageId: IdType
    userId: IdType
}

export default CustomRemoteAudioTrackVolume
