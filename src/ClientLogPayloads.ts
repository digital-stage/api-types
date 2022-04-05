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

import { WebRTCError, WebRTCStatistics } from './model'

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

    export interface TrackDescription {
        /**
         * Stream ID, is unique for each track. But cannot guarantee uniqueness, but web standards do (but browsers, too?)
         */
        streamId: string
        /**
         * Optional track ID, may NOT be unique globally, usually every browser generates its own
         */
        trackId?: string
        /**
         * Kind of track, may be video, audio or data (byte array over data channel)
         */
        kind: 'video' | 'audio' | 'data'
    }

    export type BaseRTCReport = BaseReport & {
        /** Stage Device ID of the other peer * */
        targetDeviceId: string
        /** The current connection state */
        connectionState: RTCPeerConnectionState
        /** The current ICE connection state */
        iceState: RTCIceConnectionState
        /** The current signaling state */
        signalingState: RTCSignalingState
        /** Current shortlisting of all tracks sending */
        sending: TrackDescription[]
        /** Curretn shortlisting of all tracks receiving */
        receiving: TrackDescription[]
    }

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
     * Emitted when the whole peer connection has been stopped and started again
     */
    export type RTCPeerConnectionRestarted = BaseRTCReport

    /**
     * Emitted when a restart of the remote peer has been requested
     */
    export type RTCPeerConnectionRestartRequested = BaseRTCReport

    export type RTCSignalingStateChanged = BaseRTCReport & {
        state: RTCSignalingState
    }

    export type RTCIceConnectionStateChanged = BaseRTCReport & {
        state: RTCIceConnectionState
    }

    export type RTCPeerConnectionStateChanged = BaseRTCReport & {
        state: RTCPeerConnectionState
    }

    export type RTCPeerConnectionWarning = BaseRTCReport & {
        warning: string
    }

    export type RTCPeerConnectionError = BaseRTCReport & {
        error?: WebRTCError
    }

    export type RTCNegotiationNeeded = BaseRTCReport

    /**
     * When a session description has been created and is being sent to the other peer
     */
    export type RTCSessionDescriptionCreated = BaseRTCReport & {
        type: RTCSdpType
    }

    /**
     * A session description has been accepted and added
     */
    export type RTCSessionDescriptionAdded = BaseRTCReport & {
        type: RTCSdpType
    }

    /**
     * A session description has been rejected (mostly by an impolite peer)
     */
    export type RTCSessionDescriptionIgnored = BaseRTCReport & {
        type: RTCSdpType
    }

    /**
     * No offer has been created for the given reason
     */
    export type RTCCreateOfferSkipped = BaseRTCReport & {
        reason: string
    }

    /**
     * Emitted when the ice mechanism is restarted (usually if it fails)
     */
    export type RTCIceRestarted = BaseRTCReport

    /**
     * An ice candidate has been created and is currently on its way to the remote peer
     */
    export type RTCIceCandidateCreated = BaseRTCReport & {
        candidate: RTCIceCandidate | undefined
    }

    /**
     * An ice candidate from the remote peer was accepted and added
     */
    export type RTCIceCandidateAdded = BaseRTCReport & {
        candidate: RTCIceCandidate | undefined
    }

    /**
     * Could not add the given ice candidate
     */
    export type RTCIceCandidateAddFailed = BaseRTCReport & {
        candidate: RTCIceCandidate | undefined
        err: Error
    }

    /**
     * WebRTC reported an ice candidate error (usually async, so may refer to an ice candidate that has been added seconds before)
     */
    export type RTCIceCandidateError = BaseRTCReport & {
        error: RTCPeerConnectionIceErrorEvent
    }

    /**
     * Overall statistics
     */
    export type RTCPeerConnectionStats = BaseRTCReport & WebRTCStatistics

    export type RTCStartSendingTrack = BaseRTCReport & TrackDescription
    export type RTCStopSendingTrack = BaseRTCReport & TrackDescription
    export type RTCStartReceivingTrack = BaseRTCReport & TrackDescription
    export type RTCStopReceivingTrack = BaseRTCReport & TrackDescription

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
export type WebRTCLogEntry = ClientLogPayloads.BaseRTCReport & {
    message?: string
    warning?: string
    error?: Error
} & Partial<WebRTCStatistics>

export { ClientLogPayloads }
