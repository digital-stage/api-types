interface AuthUser {
    _id: string
    name: string
    email: string
    avatarUrl?: string
    active?: boolean

    canCreateStage?: boolean

    createdAt?: Date
    updatedAt?: Date
}
export { AuthUser }
