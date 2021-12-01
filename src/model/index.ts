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

import { StageDevice } from './StageDevice'
import { ChatMessage } from './ChatMessage'
import { CustomGroupPosition } from './CustomGroupPosition'
import { CustomGroupVolume } from './CustomGroupVolume'
import { CustomAudioTrackPosition } from './CustomAudioTrackPosition'
import { CustomAudioTrackVolume } from './CustomAudioTrackVolume'
import { CustomStageMemberPosition } from './CustomStageMemberPosition'
import { CustomStageMemberVolume } from './CustomStageMemberVolume'
import { CustomStageDevicePosition } from './CustomStageDevicePosition'
import { CustomStageDeviceVolume } from './CustomStageDeviceVolume'
import { Device, DeviceType } from './Device'
import { Group } from './Group'
import { AudioTrack, AudioTrackType } from './AudioTrack'
import { VideoTrack, VideoTrackType } from './VideoTrack'
import { Router } from './Router'
import { SoundCard } from './SoundCard'
import { Stage } from './Stage'
import { StageMember } from './StageMember'
import { StagePackage } from './StagePackage'
import {
    DefaultThreeDimensionalProperties,
    ThreeDimensionalProperties,
} from './ThreeDimensionalProperties'
import { User } from './User'
import { DefaultVolumeProperties, VolumeProperties } from './VolumeProperties'
import { InitialStagePackage } from './InitialStagePackage'
import { CustomGroup } from './CustomGroup'

export * from './browser'
export * from './jammer'
export * from './ov'

export type {
    ChatMessage,
    CustomGroup,
    CustomGroupPosition,
    CustomGroupVolume,
    CustomAudioTrackPosition,
    CustomAudioTrackVolume,
    CustomStageMemberPosition,
    CustomStageMemberVolume,
    CustomStageDevicePosition,
    CustomStageDeviceVolume,
    Device,
    DeviceType,
    Group,
    AudioTrack,
    AudioTrackType,
    VideoTrack,
    VideoTrackType,
    Router,
    SoundCard,
    Stage,
    StageMember,
    StageDevice,
    StagePackage,
    ThreeDimensionalProperties,
    User,
    VolumeProperties,
    InitialStagePackage,
}

export { DefaultThreeDimensionalProperties, DefaultVolumeProperties }
