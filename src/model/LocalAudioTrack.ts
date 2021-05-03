interface LocalAudioTrack<IdType = string> {
    _id: IdType
    deviceId: IdType
    userId: IdType

    type: string
}

export default LocalAudioTrack
