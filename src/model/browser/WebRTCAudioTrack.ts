import AudioTrack from '../AudioTrack'

interface BrowserAudioTrack<IdType = string> extends AudioTrack<IdType> {
    type: 'browser'

    trackId: string
}

export default BrowserAudioTrack
