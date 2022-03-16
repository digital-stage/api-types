interface OrganizationReport<IdType = string> {
    _id: IdType
    organizationId: IdType
    stageId: IdType
    stageMemberId: IdType
    authUserId: IdType
    start: string
    end?: string
    seconds?: number
}

export { OrganizationReport }
