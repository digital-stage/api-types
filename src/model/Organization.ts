/**
 * The public interface for an organization, visible for all users (of stages) of an organization
 */
interface Organization<IdType = string> {
    _id: IdType
    name: string
    avatarUrl?: string
}

export { Organization }
