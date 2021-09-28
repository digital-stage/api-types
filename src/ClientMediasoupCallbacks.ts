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

export type TransportOptionsPlaceholder = {
    id: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    iceParameters: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    iceCandidates: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dtlsParameters: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sctpParameters?: any
    iceServers?: RTCIceServer[]
    iceTransportPolicy?: RTCIceTransportPolicy
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    additionalSettings?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    proprietaryConstraints?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    appData?: any
}

declare namespace ClientMediasoupCallbacks {
    export type ConnectWithToken = (error: string | null) => void
    export type GetRTPCapabilities<RtpCapabilities> = (
        error: string | null,
        rtpCapabilities?: RtpCapabilities
    ) => void
    export type CreateTransport<TransportOptions = TransportOptionsPlaceholder> = (
        error: string | null,
        transportOptions?: TransportOptions
    ) => void
    export type ConnectTransport = (error: string | null) => void
    export type CloseTransport = (error: string | null) => void

    export type CreateProducer = (
        error: string | null,
        data?: {
            id: string
        }
    ) => void
    export type PauseProducer = (error: string | null) => void
    export type ResumeProducer = (error: string | null) => void
    export type CloseProducer = (error: string | null) => void

    export type CreateConsumer<RtpCapabilities> = (
        error: string | null,
        data?: {
            id: string
            producerId: string
            kind: 'audio' | 'video'
            rtpParameters: RtpCapabilities
            paused: boolean
            type: 'simple' | 'simulcast' | 'svc' | 'pipe'
        }
    ) => void
    export type PauseConsumer = (error: string | null) => void
    export type ResumeConsumer = (error: string | null) => void
    export type CloseConsumer = (error: string | null) => void
}
export { ClientMediasoupCallbacks }
