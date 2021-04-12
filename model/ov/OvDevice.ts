import Device from '../Device'

interface OvDevice<IdType = string> extends Device<IdType> {
    type: 'ov'

    canOv: true
    availableSoundCardIds: IdType[]
    soundCardId: IdType
}

export default OvDevice
