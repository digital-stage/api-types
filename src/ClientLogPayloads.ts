/*
 * Copyright (c) 2021 Tobias Hegemann
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { WebRTCState, WebRTCStatistics } from './model'
import { WebRTCAdditional } from './model/browser/WebRTCState'

/**
 * The payloads describes the body of all log REST queries according the central logging service
 * @see ClientLogEvents
 * @example
 * https://myloggingserivce/p-connecting
 */
declare namespace ClientLogPayloads {
    export type BaseReport = {
        /**
         * Unique Stage Device ID, is unique for each browser window
         * @see Device
         * */
        deviceId: string
        /**
         * Unique user ID
         * @see User
         * */
        userId: string
        /** Unique email for this user * */
        email: string
        /**
         * Unique ID of stage, where the user is currently logged in
         * @see Stage
         * */
        stageId?: string
        /**
         * Name of the stage, may change during its lifetime
         * @see Stage
         */
        stageName?: string
        /**
         * Timestamp
         */
        timestamp: number
    }

    export type BaseRTCReport = BaseReport & WebRTCState

    export type BaseMediasoupReport = BaseReport & {
        routerUrl: string
    }

    export type BaseMediasoupProducerReport = BaseMediasoupReport & {
        producerId: string
        /** The track ID is the globally unique ID of this video or audio track * */
        trackId: string
    }

    export type BaseMediasoupConsumerReport = BaseMediasoupReport & {
        /** The unique ID of the consumer (usualley only used by the client itself) * */
        consumerId: string
        /** The ID of the producer that is consumed * */
        producerId: string
        /** The track ID is the globally unique ID of this video or audio track * */
        trackId: string
    }

    export type Ready = BaseReport

    /**
     * Emitted when started
     */
    export type RTCPeerConnectionStarted = BaseRTCReport

    /**
     * Emitted when stopped
     */
    export type RTCPeerConnectionStopped = BaseRTCReport

    /**
     * Emitted when the whole peer connection has been stopped and started again
     */
    export type RTCPeerConnectionRestarted = BaseRTCReport

    /**
     * Emitted when a restart of the remote peer has been requested
     */
    export type RTCPeerConnectionRestartRequested = BaseRTCReport

    export type RTCSignalingStateChanged = BaseRTCReport

    export type RTCIceConnectionStateChanged = BaseRTCReport

    export type RTCPeerConnectionStateChanged = BaseRTCReport

    export type RTCPeerConnectionWarning = BaseRTCReport &
        Required<Pick<WebRTCAdditional, 'warning'>>

    export type RTCPeerConnectionError = BaseRTCReport & Required<Pick<WebRTCAdditional, 'error'>>

    export type RTCNegotiationNeeded = BaseRTCReport

    /**
     * When a session description has been created and is being sent to the other peer
     */
    export type RTCSessionDescriptionCreated = BaseRTCReport &
        Required<Pick<WebRTCAdditional, 'type'>>

    /**
     * A session description has been accepted and added
     */
    export type RTCSessionDescriptionAdded = BaseRTCReport &
        Required<Pick<WebRTCAdditional, 'type'>>

    /**
     * A session description has been rejected (mostly by an impolite peer)
     */
    export type RTCSessionDescriptionIgnored = BaseRTCReport &
        Required<Pick<WebRTCAdditional, 'type'>>

    /**
     * No offer has been created for the given reason
     */
    export type RTCCreateOfferSkipped = BaseRTCReport & Required<Pick<WebRTCAdditional, 'reason'>>

    /**
     * Emitted when the ice mechanism is restarted (usually if it fails)
     */
    export type RTCIceRestarted = BaseRTCReport

    /**
     * An ice candidate has been created and is currently on its way to the remote peer
     */
    export type RTCIceCandidateCreated = BaseRTCReport &
        Required<Pick<WebRTCAdditional, 'candidate'>>

    /**
     * An ice candidate from the remote peer was accepted and added
     */
    export type RTCIceCandidateAdded = BaseRTCReport & Required<Pick<WebRTCAdditional, 'candidate'>>

    /**
     * Could not add the given ice candidate
     */
    export type RTCIceCandidateAddFailed = BaseRTCReport &
        Required<Pick<WebRTCAdditional, 'candidate' | 'error'>>

    /**
     * WebRTC reported an ice candidate error (usually async, so may refer to an ice candidate that has been added seconds before)
     */
    export type RTCIceCandidateError = BaseRTCReport & Required<Pick<WebRTCAdditional, 'iceError'>>

    /**
     * Overall statistics
     */
    export type RTCPeerConnectionStats = BaseRTCReport & Required<Pick<WebRTCAdditional, 'stats'>>

    export type RTCStartSendingTrack = BaseRTCReport & Required<Pick<WebRTCAdditional, 'track'>>
    export type RTCStopSendingTrack = BaseRTCReport & Required<Pick<WebRTCAdditional, 'track'>>
    export type RTCStartReceivingTrack = BaseRTCReport & Required<Pick<WebRTCAdditional, 'track'>>
    export type RTCStopReceivingTrack = BaseRTCReport & Required<Pick<WebRTCAdditional, 'track'>>
    export type RTCReceivingTrackMuted = BaseRTCReport & Required<Pick<WebRTCAdditional, 'track'>>
    export type RTCReceivingTrackUnMuted = BaseRTCReport & Required<Pick<WebRTCAdditional, 'track'>>
    export type RTCStartSendingStream = BaseRTCReport & Required<Pick<WebRTCAdditional, 'track'>>
    export type RTCStopSendingStream = BaseRTCReport & Required<Pick<WebRTCAdditional, 'track'>>
    export type RTCStartReceivingStream = BaseRTCReport & Required<Pick<WebRTCAdditional, 'track'>>
    export type RTCStopReceivingStream = BaseRTCReport & Required<Pick<WebRTCAdditional, 'track'>>

    export type MediasoupConnecting = BaseMediasoupReport
    export type MediasoupConnected = BaseMediasoupReport
    export type MediasoupDisconnected = BaseMediasoupReport
    export type MediasoupGotRtpCapabilities = BaseMediasoupReport
    export type MediasoupSendTransportConnected = BaseMediasoupReport
    export type MediasoupReceiveTransportConnected = BaseMediasoupReport
    export type MediasoupSendTransportDisconnected = BaseMediasoupReport
    export type MediasoupReceiveTransportDisconnected = BaseMediasoupReport
    export type MediasoupProducerCreated = BaseMediasoupProducerReport
    export type MediasoupProducerChanged = BaseMediasoupProducerReport & {
        muted: boolean
    }
    export type MediasoupProducerRemoved = BaseMediasoupProducerReport
    export type MediasoupConsumerCreated = BaseMediasoupConsumerReport
    export type MediasoupConsumerChanged = BaseMediasoupConsumerReport & {
        muted: boolean
    }
    export type MediasoupConsumerRemoved = BaseMediasoupConsumerReport
}

/**
 * Special entry type for the Admin API inside the log server
 */
export type WebRTCLogEntry = ClientLogPayloads.BaseRTCReport &
    WebRTCAdditional &
    Partial<WebRTCStatistics>

export { ClientLogPayloads }
