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

export interface VideoTrackType {
    webrtc: 'webrtc'
    mediasoup: 'mediasoup'
}

/* eslint @typescript-eslint/no-explicit-any: ["error", { "ignoreRestArgs": true }] */
export interface VideoTrack<IdType = string> {
    uuid: string
    _id: IdType
    userId: IdType
    deviceId: IdType
    stageId: IdType
    stageMemberId: IdType
    stageDeviceId: IdType

    /**
     * The type of the producing device
     */
    type: VideoTrackType[keyof VideoTrackType]

    solo?: boolean

    verticalPosition?: 'center' | 'bottom' | 'top'

    createdAt: number

    /**
     * Type specific payload
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [id: string]: any
}
