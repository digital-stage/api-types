import ThreeDimensionalProperties from './ThreeDimensionalProperties'

interface CustomStageDevicePosition<IdType = string> extends ThreeDimensionalProperties {
    _id: IdType
    userId: IdType
    deviceId: IdType
    stageId: IdType
    stageDeviceId: IdType
}

export { CustomStageDevicePosition }
