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

interface SoundCard<IdType = string> {
    _id: IdType

    deviceId: IdType
    /**
     * The audio driver of this sound card, e.g. ASIO, JACK, CoreAudio etc.
     */
    audioDriver: string
    /**
     * The type or direction of this sound card
     */
    type: 'input' | 'output'
    /**
     * The uuid of this sound card.
     * Can describe a sound card unique together with deviceId, audioDriver and type.
     * Hint: in JUCE we are using the name of the sound card as uuid AND label
     */
    uuid: string

    /**
     * The label, some systems e.g. JUCE just use the uuid as label
     */
    label: string

    isDefault?: boolean

    sampleRate: number
    sampleRates: number[]
    periodSize: number
    numPeriods: number // default to 2
    softwareLatency: number | null

    /**
     * Capture buffer in ms,
     * affects the latency of own and others
     */
    inputBuffer: number
    /**
     * Playback buffer in ms,
     * affects the own latency
     */
    outputBuffer: number

    /**
     * Indexed list of channels
     */
    channels: {
        /**
         * Optional label of this channel.
         * If no label is given, the web client will display the channel index instead
         */
        label?: string
        /**
         * Indicates, if this channel is or shall be currently active
         */
        active: boolean
    }[]

    /**
     * Indicate if the given sound card is connected and online
     */
    online: boolean

    // helper entry
    userId: IdType
}

export { SoundCard }
