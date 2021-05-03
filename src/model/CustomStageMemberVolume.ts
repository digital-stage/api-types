import VolumeProperties from './VolumeProperties'

interface CustomStageMemberVolume<IdType = string> extends VolumeProperties {
    _id: IdType
    userId: IdType
    deviceId: IdType
    stageId: IdType
    stageMemberId: IdType
}

export default CustomStageMemberVolume
