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

import { Router } from './model/Router'

declare namespace ClientRouterPayloads {
    export type ConnectAsRouter = {
        apiKey: string
        router: Omit<Router, '_id' | 'apiServer'>
    }
    export type Ready = undefined

    export type Update = Partial<Router>

    export type JammerStarted = {
        stageId: string
        ipv4: string
        ipv6: string
        port: number
        key: string
    }

    export type JammerUpdated = Partial<JammerStarted>

    export type JammerFailed = {
        stageId: string
        error: string
        port?: number
    }

    export type MediasoupStarted = {
        stageId: string
        url: string
        port: number
    }

    export type MediasoupUpdated = Partial<MediasoupStarted>

    export type MediasoupFailed = {
        stageId: string
        error: string
    }

    export type OvStarted = {
        stageId: string
        ipv4: string
        ipv6: string
        port: number
        pin?: string
    }

    export type OvFailed = {
        stageId: string
        error: string
        port?: number
    }

    export type OvUpdated = Partial<OvStarted>

    export type StageId = string
    export type JammerStopped = StageId
    export type MediasoupStopped = StageId
    export type OvStopped = StageId
}
export { ClientRouterPayloads }
