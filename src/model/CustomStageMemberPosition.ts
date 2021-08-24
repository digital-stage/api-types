import ThreeDimensionalProperties from './ThreeDimensionalProperties'

interface CustomStageMemberPosition<IdType = string> extends ThreeDimensionalProperties {
    _id: IdType
    userId: IdType
    stageId: IdType
    deviceId: IdType
    stageMemberId: IdType
}

export { CustomStageMemberPosition }
