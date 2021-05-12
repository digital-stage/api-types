interface Device<IdType = string> {
    _id: IdType
    userId: IdType

    /**
     * This _identifies the type of the device. Regarding to the type additional items may be available.
     */
    type: 'mediasoup' | 'ov' | 'jammer'

    name: string

    online: boolean

    canAudio: boolean
    canVideo: boolean
    sendAudio: boolean
    sendVideo: boolean
    receiveAudio: boolean
    receiveVideo: boolean

    /**
     * Use this to _identify existing devices on connect, on native clients you might use the mac address, on browser a cookie _id
     */
    uuid: string | null
    requestSession?: boolean

    createdAt: Date
    lastLoginAt: Date

    soundCardId: IdType | null

    volume: number

    // OV SPECIFIC
    egoGain: number
    ovReverbGain: number
    ovRenderReverb: boolean
    ovRenderISM: boolean
    ovRawMode: boolean
    ovReceiverType: 'ortf' | 'hrtf'
    canOv: boolean
    ovP2p: boolean

    [additional: string]: any

    // Additional information about connected api server
    apiServer: string
}

export const getDefaultDeviceValues = <IdType = string>(): Omit<
    Device<IdType>,
    '_id' | 'userId' | 'soundCardId'
> => ({
    uuid: null,
    type: 'unknown',
    requestSession: false,
    canAudio: false,
    canVideo: false,
    receiveAudio: false,
    receiveVideo: false,
    sendAudio: false,
    sendVideo: false,
    ovRawMode: false,
    ovRenderISM: false,
    ovP2p: true,
    ovReceiverType: 'ortf',
    ovRenderReverb: true,
    ovReverbGain: 0.4,
    canOv: false,
    volume: 1,
    egoGain: 1,
})

export default Device
