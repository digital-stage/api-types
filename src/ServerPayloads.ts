import { Router } from './model/Router'
import { Device } from './model/Device'

declare namespace Payloads {
    export type PayloadIdType = string
    export type RemoteAudioTrackId = PayloadIdType
    export type UserId = PayloadIdType

    // General or common payloads
    export interface ConnectAsRouter {
        apiKey: string
        router?: Partial<Omit<Router, '_id'>>
    }

    export interface ConnectWithToken {
        token: string
        device?: Partial<Omit<Device, '_id'>> & { uuid: string }
    }
}

export { Payloads }
