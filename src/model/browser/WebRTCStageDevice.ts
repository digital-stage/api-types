import { StageDevice } from '../StageDevice'

interface WebRTCStageDevice<IdType = string> extends StageDevice<IdType> {
    offer: RTCSessionDescriptionInit
}
export { WebRTCStageDevice }
