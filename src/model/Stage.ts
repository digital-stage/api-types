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

import {DeviceType} from './Device'

interface Stage<IdType = string> {
    _id: IdType

    name: string
    description: string
    password: string | null

    admins: IdType[]
    soundEditors: IdType[]

    iconUrl: string | null

    videoType: DeviceType[keyof DeviceType]
    videoRouter: IdType | null

    audioType: DeviceType[keyof DeviceType]
    audioRouter: IdType | null

    // 3D audio related settings
    width: number
    length: number
    height: number
    reflection: number
    absorption: number

    render3DAudio: boolean
    renderReverb: boolean

    // Video related settings
    displayMode?: 'boxes' | 'lanes'
    numBoxes: number
    numLanes: number

    preferredPosition: {
        lat: number
        lng: number
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [additional: string]: any
}

export {Stage}
