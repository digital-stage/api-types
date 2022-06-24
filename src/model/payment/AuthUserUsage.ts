export interface AuthUserUsage<IdType = string> {
    _id: IdType
    authUserId: IdType
    organizationId?: IdType
    ownerAuthUserId?: IdType
    stageId: string
    stageName: string
    start: number
    end: number
    duration: number
}
