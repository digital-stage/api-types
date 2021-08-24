interface ChatMessage<IdType = string> {
    userId: IdType
    stageMemberId: IdType
    message: string
    time: number
}

export { ChatMessage }
