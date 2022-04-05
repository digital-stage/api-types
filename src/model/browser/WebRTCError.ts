import { WebRTCState } from './WebRTCState'

export interface WebRTCError extends Error {
    reason?: Error
    state: WebRTCState
}
