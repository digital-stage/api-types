/**
 * The public interface for an organization, visible for all users (of stages) of an organization
 */
interface PublicOrganization<IdType = string> {
    _id: IdType
    name: string
    avatarUrl?: string
}

/**
 * The full interface for an organization, visible only for organization users
 */
interface Organization<IdType = string> extends PublicOrganization<IdType> {
    /**
     * The amount of stage person hours per month for this organization
     */
    monthlyStagePersonHours: number
    /**
     * How many stages a organization may create
     */
    maxStageCapacity: number

    createdAt: string
    updatedAt: string
}

export { Organization, PublicOrganization }
