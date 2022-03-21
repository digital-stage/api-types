interface OrganizationReport<IdType = string> {
    _id: IdType
    organizationId: IdType
    stageId: IdType
    stageMemberId: IdType
    authUserId: IdType
    start: number
    end?: number
    duration?: number
}

export { OrganizationReport }
