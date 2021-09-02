interface Stage<IdType = string> {
    _id: IdType

    name: string
    description: string
    password: string | null

    admins: IdType[]
    soundEditors: IdType[]

    iconUrl: string | null

    videoType: string
    videoRouter: IdType | null

    audioType: string
    audioRouter: IdType | null

    preferredPosition: {
        lat: number
        lng: number
    }

    width: number
    length: number
    height: number
    reflection: number
    absorption: number

    render3DAudio: boolean
    renderReverb: boolean

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [additional: string]: any
}

export { Stage }
