import { VolumeProperties } from './VolumeProperties'

interface CustomGroupVolume<IdType = string> extends VolumeProperties {
    _id: IdType
    // UNIQUE PAIR:
    deviceId: IdType
    groupId: IdType
    // Helper
    userId: IdType
    stageId: IdType
}

export { CustomGroupVolume }
