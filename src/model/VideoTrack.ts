interface VideoTrack<IdType = string> {
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
     * Type specific payload
     */
    [id: string]: any
}

export default VideoTrack
