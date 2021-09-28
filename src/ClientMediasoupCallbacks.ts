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

declare namespace ClientMediasoupCallbacks {
  export type ConnectWithToken = (error: string | null) => void
  export type GetRTPCapabilities = (error: string | null,
                                    rtpCapabilities: any) => void
  export type CreateTransport = (error: string | null,
                                 transportOptions: any) => void
  export type ConnectTransport = (error: string | null) => void
  export type CloseTransport = (error: string | null) => void

  export type CreateProducer = (error: string | null, data: {
    id: string
  }) => void
  export type PauseProducer = (error: string | null) => void
  export type ResumeProducer = (error: string | null) => void
  export type CloseProducer = (error: string | null) => void

  export type CreateConsumer = (
    error: string | null,
    data: {
      id: string
      producerId: string
      kind: 'audio' | 'video'
      rtpParameters: any
      paused: boolean
      type: 'simple' | 'simulcast' | 'svc' | 'pipe'
    }) => void
  export type PauseConsumer = (error: string | null) => void
  export type ResumeConsumer = (error: string | null) => void
  export type CloseConsumer = (error: string | null) => void
}
export {ClientMediasoupCallbacks}