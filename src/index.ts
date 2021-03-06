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

import { ClientDeviceEvents } from './ClientDeviceEvents'
import { ClientDevicePayloads } from './ClientDevicePayloads'
import { ClientLogEvents } from './ClientLogEvents'
import { ClientLogPayloads, WebRTCLogEntry } from './ClientLogPayloads'
import { ClientMediasoupPayloads } from './ClientMediasoupPayloads'
import { ClientRouterEvents } from './ClientRouterEvents'
import { ClientRouterPayloads } from './ClientRouterPayloads'
import { ErrorCode, ErrorCodes } from './ErrorCodes'
import { getDefaultDeviceValues } from './model/Device'
import { ServerDeviceEvents } from './ServerDeviceEvents'
import { RouterMediasoupPayloads } from './RouterMediasoupPayloads'
import { ServerDevicePayloads } from './ServerDevicePayloads'
import { ServerRouterEvents } from './ServerRouterEvents'
import { ServerRouterPayloads } from './ServerRouterPayloads'
import { RouterMediasoupEvents } from './RouterMediasoupEvents'
import { ClientMediasoupEvents } from './ClientMediasoupEvents'
import { validatePayload, ValidationKey, ValidationTypes } from './validatePayload'

export * from './model'

export type {
    ClientDevicePayloads,
    ClientLogPayloads,
    ClientRouterPayloads,
    ClientMediasoupPayloads,
    ServerDevicePayloads,
    ServerRouterPayloads,
    RouterMediasoupPayloads,
    ErrorCode,
    ValidationTypes,
    ValidationKey,
    WebRTCLogEntry,
}

export {
    ClientDeviceEvents,
    ClientRouterEvents,
    ClientLogEvents,
    ClientMediasoupEvents,
    ServerDeviceEvents,
    ServerRouterEvents,
    RouterMediasoupEvents,
    getDefaultDeviceValues,
    ErrorCodes,
    validatePayload,
}
