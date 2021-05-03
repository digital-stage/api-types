import ThreeDimensionalProperties from './ThreeDimensionalProperties'

interface CustomRemoteAudioTrackPosition<IdType = string> extends ThreeDimensionalProperties {
    _id: IdType
    // UNIQUE PAIR
    deviceId: IdType
    remoteAudioTrackId: IdType
    // HELPER
    stageId: IdType
    userId: IdType
}

export default CustomRemoteAudioTrackPosition
