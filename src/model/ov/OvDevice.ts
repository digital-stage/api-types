import Device from '../Device'

interface OvDevice<IdType = string> extends Device<IdType> {
    type: 'ov'
}

export default OvDevice
