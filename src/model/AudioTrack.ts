import { ThreeDimensionalProperties } from './ThreeDimensionalProperties'
import { VolumeProperties } from './VolumeProperties'

export interface AudioTrack<IdType = string> extends ThreeDimensionalProperties, VolumeProperties {
    _id: IdType
    userId: IdType
    deviceId: IdType
    stageId: IdType
    stageMemberId: IdType
    stageDeviceId: IdType

    /**
     * The type of the producing device
     */
    type: string

    /**
     * Additional type specific payload
     */
    [id: string]: unknown
}
