interface Stage<IdType = string> {
    _id: IdType

    name: string
    description: string
    password: string | null

    admins: IdType[]
    soundEditors: IdType[]

    iconUrl: string | null

    videoType: string | null
    videoRouter: IdType

    audioType: string | null
    audioRouter: IdType

    preferredPosition: {
        lat: number
        lng: number
    }

    width: number
    length: number
    height: number
    reflection: number
    absorption: number

    [additional: string]: any
}

export default Stage
