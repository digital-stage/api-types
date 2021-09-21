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

/**
 * The event values are also the path of the central logging service
 * @see ClientDevicePayloads
 * @example
 * https://myloggingserivce/p-connecting
 */
const ClientLogEvents = {
    /** Called each time the application starts (also after an refresh of the browser tab) **/
    Ready: 'ready',
    // WebRTC specific logs
    /** Called when a participant is connecting to another **/
    PeerConnecting: 'p-connecting',
    /** Called when a participant is connected to another **/
    PeerConnected: 'p-connected',
    /** Called when the ice process failed with another peer **/
    PeerIceFailed: 'p-ice-failed',
    /** Called when the connection ended to another peer **/
    PeerDisconnected: 'p-disconnected',
    /** General RTC statistics, refer to
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_Statistics_API}
     * @see {@link https://www.w3.org/TR/webrtc-stats/} **/
    PeerStats: 'p-s',
}
export { ClientLogEvents }
