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

import { User } from './User'
import { Stage } from './Stage'
import { Group } from './Group'
import { CustomGroupPosition } from './CustomGroupPosition'
import { CustomStageMemberPosition } from './CustomStageMemberPosition'
import { StageMember } from './StageMember'
import { CustomGroupVolume } from './CustomGroupVolume'
import { CustomStageMemberVolume } from './CustomStageMemberVolume'
import { AudioTrack } from './AudioTrack'
import { VideoTrack } from './VideoTrack'
import { CustomAudioTrackPosition } from './CustomAudioTrackPosition'
import { CustomAudioTrackVolume } from './CustomAudioTrackVolume'
import { StageDevice } from './StageDevice'
import { CustomStageDeviceVolume } from './CustomStageDeviceVolume'
import { CustomStageDevicePosition } from './CustomStageDevicePosition'

interface StagePackage<IdType = string> {
    users: User<IdType>[]

    stage?: Stage<IdType>
    groups?: Group<IdType>[]
    customGroupVolumes: CustomGroupVolume<IdType>[]
    customGroupPositions: CustomGroupPosition<IdType>[]
    stageMembers: StageMember<IdType>[]
    customStageMemberVolumes: CustomStageMemberVolume<IdType>[]
    customStageMemberPositions: CustomStageMemberPosition<IdType>[]
    stageDevices: StageDevice<IdType>[]
    customStageDeviceVolumes: CustomStageDeviceVolume<IdType>[]
    customStageDevicePositions: CustomStageDevicePosition<IdType>[]
    audioTracks: AudioTrack<IdType>[]
    videoTracks: VideoTrack<IdType>[]
    customAudioTrackPositions: CustomAudioTrackPosition<IdType>[]
    customAudioTrackVolumes: CustomAudioTrackVolume<IdType>[]
}

export { StagePackage }
