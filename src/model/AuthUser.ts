interface AuthUser {
    _id: string
    name: string
    email: string
    avatarUrl?: string
    active?: boolean

    isAdmin?: boolean
    canCreateStage?: boolean

    createdAt?: string
    updatedAt?: string
}
export { AuthUser }
