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
    /** Called each time the application starts (also after an refresh of the browser tab) * */
    Ready: 'ready',
    // WebRTC specific logs

    PeerTrackAdded: 'p-track-added',
    PeerTrackRemoved: 'p-track-added',

    RTCPeerConnectionRestarted: 'p-restarted',

    RTCPeerConnectionRestartRequested: 'p-restart-requested',

    /** Called when the signaling state of this peer changed **/
    RTCSignalingStateChanged: 'p-signaling',
    /** Called when the ice connection state of this peer changed **/
    RTCIceConnectionStateChanged: 'p-ice-connection',
    /** Called when the general connection state of this peer changed **/
    RTCPeerConnectionStateChanged: 'p-connection',

    RTCPeerConnectionWarning: 'p-warning',

    RTCPeerConnectionError: 'p-error',

    RTCNegotiationNeeded: 'p-negotiation',

    RTCSessionDescriptionCreated: 'p-desc-created',

    RTCSessionDescriptionAdded: 'p-desc-added',

    RTCSessionDescriptionIgnored: 'p-desc-ignored',

    RTCCreateOfferSkipped: 'p-offer-skipped',

    RTCIceRestarted: 'p-ice-restart',

    RTCIceCandidateCreated: 'p-ice-created',

    RTCIceCandidateAdded: 'p-ice-added',

    RTCIceCandidateAddFailed: 'p-ice-failed',

    /** Called when an ice candidate error is captured **/
    IceCandidateError: 'p-ice-error',

    /** General RTC statistics, refer to
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_Statistics_API}
     * @see {@link https://www.w3.org/TR/webrtc-stats/} * */
    RTCPeerConnectionStats: 'p-s',

    RTCStartSendingTrack: 'p-start-sending-track',

    RTCStopSendingTrack: 'p-stop-sending-track',

    RTCStartReceivingTrack: 'p-start-receiving-track',

    RTCStopReceivingTrack: 'p-stop-receiving-track',

    /**
     * MEDIASOUP CONNECTION ITERATION:
     * - Connect to router (m-connecting, m-connected)
     * - Fetch RTP Capabilities
     * - Create Send Transport
     * - Create Receive Transport
     * - Create producer for all local media (webcam, microphone)
     * - Create consumer for all available producers of other clients
     */
    /** Called when a connection to a mediasoup router is initiated * */
    MediasoupConnecting: 'm-connecting',
    /** Called when a connection to a mediasoup router has been established * */
    MediasoupConnected: 'm-connecting',
    /** Called when a connection to a mediasoup router has been unintentionally disconnected * */
    MediasoupDisconnected: 'm-disconnected',
    /** Called when the RTP Capabilities has been fetched from the router * */
    MediasoupGotRtpCapabilities: 'm-rtp-capabilities',
    /** Called when a send transport has been connected * */
    MediasoupSendTransportConnected: 'm-connect-send-transport',
    /** Called when a receive transport has been connected * */
    MediasoupReceiveTransportConnected: 'm-connect-receive-transport',
    /** Called when a send transport has been unexpected disconnected * */
    MediasoupSendTransportDisconnected: 'm-send-transport-disconnected',
    /** Called when a receive transport has been unexpected disconnected * */
    MediasoupReceiveTransportDisconnected: 'm-receive-transport-disconnected',
    /** Called when a new producer has been created * */
    MediasoupProducerCreated: 'm-producer-added',
    /** Called when the mute state of an producer changed * */
    MediasoupProducerMuteChanged: 'm-producer-mute-changed',
    /** Called when a producer has been removed * */
    MediasoupProducerRemoved: 'm-producer-removed',
    /** Called when a new producer has been created * */
    MediasoupConsumerCreated: 'm-consumer-added',
    /** Called when the mute state of an consumer changed * */
    MediasoupConsumerMuteChanged: 'm-consumer-mute-changed',
    /** Called when a consumer has been removed * */
    MediasoupConsumerRemoved: 'm-consumer-removed',
}
export { ClientLogEvents }
