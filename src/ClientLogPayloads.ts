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

type BaseReport = {
    /**
     * Unique device ID, is unique for each browser window
     * @see Device
     **/
    deviceId: string
    /**
     * Unique user ID
     * @see User
     **/
    userId: string
    /** Unique email for this user **/
    email: string
    /**
     * Unique ID of stage, where the user is currently logged in
     * @see Stage
     **/
    stageId: string
}

type BasePeerReport = BaseReport & {
    /** Device ID of the other peer **/
    targetDeviceId: string
}

/**
 * The payloads describes the body of all log REST queries according the central logging service
 * @see ClientLogEvents
 * @example
 * https://myloggingserivce/p-connecting
 */
declare namespace ClientLogPayloads {
    export type Ready = BaseReport

    export type PeerConnecting = BasePeerReport

    export type PeerConnected = BasePeerReport

    export type PeerIceFailed = BasePeerReport & {
        /** Short reason describing why the ICE process failed **/
        reason?: string
    }

    export type PeerDisconnected = BasePeerReport

    export type PeerStats = BasePeerReport & {
        stats: RTCStatsReport
    }
}
export { ClientLogPayloads }
