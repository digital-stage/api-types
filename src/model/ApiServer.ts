export interface ApiServer<IdType = string> {
    _id: IdType
    createdAt: number
    lastTimestamp: number
}
