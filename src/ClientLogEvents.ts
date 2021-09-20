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
