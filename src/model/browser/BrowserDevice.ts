import Device from '../Device'
import WebMediaDevice from './WebMediaDevice'

interface BrowserDevice<IdType = string> extends Device<IdType> {
    type: 'browser'

    canWebRTC: true
    canMediasoup: true

    // WebRTC video device
    inputVideoDevices: WebMediaDevice[]
    inputVideoDeviceId?: string

    // WebRTC audio device
    inputAudioDevices: WebMediaDevice[]
    inputAudioDeviceId?: string
    outputAudioDevices: WebMediaDevice[]
    outputAudioDeviceId?: string

    sampleRate?: number
    autoGainControl?: boolean
    echoCancellation?: boolean
    noiseSuppression?: boolean

    os?: string
    browser?: string

    egoVolume: number
}

export { BrowserDevice }
