interface LocalVideoTrack<IdType = string> {
    _id: IdType
    deviceId: IdType
    userId: IdType
    type: string

    [additionalItems: string]: any
}

export default LocalVideoTrack
