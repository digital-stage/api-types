import Device from '../Device'

export interface JammerDevice<IdType = string> extends Device<IdType> {
    type: 'jammer'

    canJammer: true
}
