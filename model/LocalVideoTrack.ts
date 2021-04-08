interface LocalVideoTrack<IdType = string> {
    _id: IdType
    deviceId: IdType
    userId: IdType
    type: string
}

export default LocalVideoTrack
