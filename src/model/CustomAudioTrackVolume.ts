import { VolumeProperties } from './VolumeProperties'

interface CustomAudioTrackVolume<IdType = string> extends VolumeProperties {
    _id: IdType
    // UNIQUE PAIR
    deviceId: IdType
    audioTrackId: IdType
    // HELPER
    stageId: IdType
    userId: IdType
}

export { CustomAudioTrackVolume }
