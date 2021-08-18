interface ErrorCodes {
    InvalidCredentials: 'Invalid credentials'
    MissingAuthorization: 'Missing authorization'
    InvalidAuthorization: 'Invalid authorization'
    InvalidPassword: 'Invalid password'
    StageNotFound: 'Not found'
    GroupIdMissing: 'Group ID missing'
    NotMemberOfStage: 'Not member of stage'
    NoRouterAvailable: 'No router available'
    MissingTypeOfDevice: 'Missing type of device'
    MaxMembersReached: 'No more members possible, max of 30 reached'
    StageIsAlreadyFullyServed: 'Stage is already fully served'
}
export default ErrorCodes
