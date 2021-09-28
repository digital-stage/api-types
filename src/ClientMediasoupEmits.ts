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

import {ClientMediasoupPayloads} from "./ClientMediasoupPayloads";
import {ClientMediasoupEvents} from "./ClientMediasoupEvents";
import {ClientMediasoupCallbacks} from "./ClientMediasoupCallbacks";
import {Handler} from "./Handler";

export const getRtpCapabilities: Handler = (data: ClientMediasoupPayloads.GetRTPCapabilities, callback?: ClientMediasoupCallbacks.GetRTPCapabilities) => (ClientMediasoupEvents.GetRTPCapabilities, data, callback)

export const createTransport: Handler = (callback?: ClientMediasoupCallbacks.CreateTransport) => (ClientMediasoupEvents.CreateTransport, undefined as ClientMediasoupPayloads.CreateTransport, callback)
export const connectTransport: Handler = (data: ClientMediasoupPayloads.ConnectTransport, callback?: ClientMediasoupCallbacks.ConnectTransport) => (ClientMediasoupEvents.ConnectTransport, data, callback)


export const createProducer: Handler = (data: ClientMediasoupPayloads.CreateProducer, callback?: ClientMediasoupCallbacks.CreateProducer) => (ClientMediasoupEvents.CreateProducer, data, callback)
export const pauseProducer: Handler = (id: ClientMediasoupPayloads.PauseProducer, callback?: ClientMediasoupCallbacks.PauseProducer) => (ClientMediasoupEvents.PauseProducer, id, callback)
export const resumeProducer: Handler = (id: ClientMediasoupPayloads.ResumeProducer, callback?: ClientMediasoupCallbacks.ResumeProducer) => (ClientMediasoupEvents.ResumeProducer, id, callback)
export const closeProducer: Handler = (id: ClientMediasoupPayloads.CloseProducer, callback?: ClientMediasoupCallbacks.CloseProducer) => (ClientMediasoupEvents.CloseProducer, id, callback)

export const createConsumer: Handler = (data: ClientMediasoupPayloads.CreateConsumer, callback?: ClientMediasoupCallbacks.CreateConsumer) => (ClientMediasoupEvents.CreateConsumer, data, callback)
export const pauseConsumer: Handler = (id: ClientMediasoupPayloads.PauseConsumer, callback?: ClientMediasoupCallbacks.PauseConsumer) => (ClientMediasoupEvents.PauseConsumer, id, callback)
export const resumeConsumer: Handler = (id: ClientMediasoupPayloads.ResumeConsumer, callback?: ClientMediasoupCallbacks.ResumeConsumer) => (ClientMediasoupEvents.ResumeConsumer, id, callback)
export const closeConsumer: Handler = (id: ClientMediasoupPayloads.CloseConsumer, callback?: ClientMediasoupCallbacks.CloseConsumer) => (ClientMediasoupEvents.CloseConsumer, id, callback)
