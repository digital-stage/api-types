/*eslint @typescript-eslint/no-explicit-any: ["error", { "ignoreRestArgs": true }]*/
export interface VideoTrack<IdType = string> {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [id: string]: any
}
