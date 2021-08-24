interface Router<IdType = string> {
    _id: IdType

    types: {
        [type: string]: number
    }

    countryCode: string
    city: string
    position: {
        lat: number
        lng: number
    }

    apiServer: string

    [additional: string]: unknown
}

export { Router }
