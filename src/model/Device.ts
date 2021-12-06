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

export interface DeviceType {
    browser: 'browser'
    jammer: 'jammer'
    ov: 'ov'
    native: 'native'
}

interface Device<IdType = string> {
    _id: IdType
    userId: IdType

    /**
     * This _identifies the type of the device. Regarding to the type additional items may be available.
     */
    type: DeviceType[keyof DeviceType]

    name: string

    online: boolean

    canAudio: boolean
    canVideo: boolean
    sendAudio: boolean
    sendVideo: boolean
    receiveAudio: boolean
    receiveVideo: boolean

    /**
     * Use this to identify existing devices on connect, on native clients you might use the mac address, on browser a cookie _id
     */
    uuid: string | null
    requestSession?: boolean

    createdAt: number
    lastLoginAt: number

    /**
     * The currently selected audio engine (e.g. JUCE, rtaudio, webaudio)
     */
    audioEngine: string
    /**
     * The currently selected audio driver (e.g. jack, CoreAudio)
     */
    audioDriver?: string
    /**
     * The currently selected input sound card or null if none selected
     */
    inputSoundCardId: IdType | null
    /**
     * The currently selected output sound card or null if none selected
     */
    outputSoundCardId: IdType | null

    /**
     * The output volume
     */
    volume: number

    /**
     * The balance between the monitor and the session mixer aka Ego balance
     */
    balance: number

    /**
     * The amount of receiver buffer in samples used on this client
     */
    buffer: number

    // WEB CLIENT SPECIFIC
    showOffline?: boolean

    // OV SPECIFIC
    egoGain: number
    ovReverbGain: number
    ovRenderReverb: boolean
    ovRenderISM: boolean
    ovRawMode: boolean
    ovReceiverType: 'ortf' | 'hrtf'
    canOv: boolean
    ovP2p: boolean

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [additional: string]: any

    // Additional information about connected api server
    apiServer: string
}

export const getDefaultDeviceValues = <IdType = string>(): Omit<
    Device<IdType>,
    '_id' | 'userId' | 'soundCardId'
> => ({
    uuid: null,
    type: 'browser',
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
    balance: 0.5,
})

export { Device }
