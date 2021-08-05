import { BrowserDevice } from '../browser'

interface MediasoupDevice<IdType = string> extends Omit<BrowserDevice<IdType>, 'type'> {
    type: 'mediasoup'
    canMediasoup: true
}
export default MediasoupDevice
