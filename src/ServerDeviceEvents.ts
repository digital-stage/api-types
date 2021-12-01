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

const ServerDeviceEvents = {
    UUIDSuggested: 'uuid',

    LocalDeviceReady: 'ldr',
    UserReady: 'u-r',
    Ready: 'ok',

    UserAdded: 'u-a',
    UserChanged: 'u-c',
    UserRemoved: 'u-r',

    ChatMessageSend: 'c',

    RouterAdded: 'r-a',
    RouterChanged: 'r-c',
    RouterRemoved: 'r-r',

    DeviceAdded: 'd-a',
    DeviceChanged: 'd-c',
    DeviceRemoved: 'd-r',

    SoundCardAdded: 'sc-a',
    SoundCardChanged: 'sc-c',
    SoundCardRemoved: 'sc-r',

    StageAdded: 's-a',
    StageChanged: 's-c',
    StageRemoved: 's-r',

    StageJoined: 's-j',
    StageLeft: 's-l',

    GroupAdded: 'g-a',
    GroupChanged: 'g-c',
    GroupRemoved: 'g-r',

    CustomGroupAdded: 'c-g-a',
    CustomGroupChanged: 'c-g-c',
    CustomGroupRemoved: 'c-g-r',

    CustomGroupPositionAdded: 'c-g-p-a',
    CustomGroupPositionChanged: 'c-g-p-c',
    CustomGroupPositionRemoved: 'c-g-p-r',

    CustomGroupVolumeAdded: 'c-g-v-a',
    CustomGroupVolumeChanged: 'c-g-v-c',
    CustomGroupVolumeRemoved: 'c-g-v-r',

    StageMemberAdded: 'sm-a',
    StageMemberChanged: 'sm-c',
    StageMemberRemoved: 'sm-r',

    CustomStageMemberPositionAdded: 'c-sm-p-a',
    CustomStageMemberPositionChanged: 'c-sm-p-c',
    CustomStageMemberPositionRemoved: 'c-sm-p-r',

    CustomStageMemberVolumeAdded: 'c-sm-v-a',
    CustomStageMemberVolumeChanged: 'c-sm-v-c',
    CustomStageMemberVolumeRemoved: 'c-sm-v-r',

    StageDeviceAdded: 'sd-a',
    StageDeviceChanged: 'sd-c',
    StageDeviceRemoved: 'sd-r',

    CustomStageDevicePositionAdded: 'c-sd-p-a',
    CustomStageDevicePositionChanged: 'c-sd-p-c',
    CustomStageDevicePositionRemoved: 'c-sd-p-r',

    CustomStageDeviceVolumeAdded: 'c-sd-v-a',
    CustomStageDeviceVolumeChanged: 'c-sd-v-c',
    CustomStageDeviceVolumeRemoved: 'c-sd-v-r',

    VideoTrackAdded: 'v-a',
    VideoTrackChanged: 'v-c',
    VideoTrackRemoved: 'v-r',

    AudioTrackAdded: 'a-a',
    AudioTrackChanged: 'a-c',
    AudioTrackRemoved: 'a-r',

    CustomAudioTrackPositionAdded: 'c-a-p-a',
    CustomAudioTrackPositionChanged: 'c-a-p-c',
    CustomAudioTrackPositionRemoved: 'c-a-p-r',

    CustomAudioTrackVolumeAdded: 'c-a-v-a',
    CustomAudioTrackVolumeChanged: 'c-a-v-c',
    CustomAudioTrackVolumeRemoved: 'c-a-v-r',

    TurnServersChanged: 't',
    P2PRestart: 'p2p-r',
    P2POfferSent: 'p2p-o',
    P2PAnswerSent: 'p2p-a',
    IceCandidateSent: 'ice',
}
export { ServerDeviceEvents }
