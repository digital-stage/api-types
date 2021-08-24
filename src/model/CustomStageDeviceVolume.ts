import VolumeProperties from './VolumeProperties'

interface CustomStageDeviceVolume<IdType = string> extends VolumeProperties {
    _id: IdType
    userId: IdType
    deviceId: IdType
    stageId: IdType
    stageDeviceId: IdType
}

export { CustomStageDeviceVolume }
