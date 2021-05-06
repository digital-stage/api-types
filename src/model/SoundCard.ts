interface SoundCard<IdType = string> {
    _id: IdType
    deviceId: IdType

    /**
     * Soundcard identifier on system,
     * will make sound card unique together with device id
     */
    uuid: string

    label: string

    isDefault?: boolean

    drivers: string[]
    driver: string | null

    sampleRate: number
    sampleRates: number[]
    periodSize: number
    numPeriods: number // default to 2

    softwareLatency: number | null

    inputChannels: {
        [id: string]: boolean
    }
    outputChannels: {
        [id: string]: boolean
    }

    online: boolean

    // helper entry
    userId: IdType
}

export default SoundCard
