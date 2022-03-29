/**
 * The public interface for an organization, visible for all users (of stages) of an organization
 */
interface Organization<IdType = string> {
    _id: IdType
    name: string
    avatarUrl?: string
}

/**
 * The full interface for an organization, visible only for organization users and living on the auth server
 */
interface AuthOrganization<IdType = string> extends Organization<IdType> {
    /**
     * The amount of stage person hours per month for this organization
     */
    monthlyStagePersonHours: number
    /**
     * How many stages a organization may create
     */
    maxStageCount: number

    createdAt: string
    updatedAt: string
}

export { Organization, AuthOrganization }
