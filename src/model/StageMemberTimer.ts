/**
 * This timer is started if the first Audio- or VideoTrack of the stage member is created and will be deleted,
 * when the last Audio- or VideoTrack of the stage member is destroyed.
 * When destroyed the API server will send a report to the auth server.
 */
interface StageMemberTimer<IdType = string> {
    _id: IdType
    // Either organization or owner (or both)
    organizationId?: string
    ownerAuthUserId?: string
    stageMemberId: IdType
    start: number
    //end?: number
}

export { StageMemberTimer }
