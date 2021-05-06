import ThreeDimensionalProperties from './ThreeDimensionalProperties'

interface CustomAudioTrackPosition<IdType = string> extends ThreeDimensionalProperties {
    _id: IdType
    // UNIQUE PAIR
    deviceId: IdType
    audioTrackId: IdType
    // HELPER
    stageId: IdType
    userId: IdType
}

export default CustomAudioTrackPosition
