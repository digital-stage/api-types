import { Organization } from '../Organization'
import { BillingAddress } from './BillingAddress'
import { SubscriptionType } from './SubscriptionType'

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

    subscription?: SubscriptionType

    address?: BillingAddress

    createdAt: string
    updatedAt: string
}

export { AuthOrganization }
