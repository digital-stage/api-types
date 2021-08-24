import ThreeDimensionalProperties from './ThreeDimensionalProperties'

interface CustomGroupPosition<IdType = string> extends ThreeDimensionalProperties {
    _id: IdType
    // UNIQUE PAIR:
    deviceId: IdType
    groupId: IdType
    // Helper
    userId: IdType
    stageId: IdType
}

export { CustomGroupPosition }
