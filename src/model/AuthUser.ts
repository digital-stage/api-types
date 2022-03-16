interface AuthUser<IdType = string> {
    _id: IdType
    name: string
    email: string
    avatarUrl?: string
    active?: boolean

    isAdmin?: boolean

    /**
     * The assigned organization.
     * When a user is assigned to an organization,
     * she might create stages depending on the maxStageCapacity of her organization
     */
    organizationId?: IdType

    createdAt?: string
    updatedAt?: string
}

export { AuthUser }
