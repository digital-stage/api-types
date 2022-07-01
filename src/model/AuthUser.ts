interface AuthUser<IdType = string> {
    _id: IdType
    name: string
    email: string
    avatarUrl?: string

    /**
     * Indicates if the user has global admin rights
     */
    isAdmin?: boolean

    /**
     * The assigned organization.
     * An auth user is first activated, when assigned to an organization.
     * So an organization is required.
     */
    organizationId?: IdType

    createdAt?: string
    updatedAt?: string
}

export { AuthUser }
