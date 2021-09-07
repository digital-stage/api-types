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

    turnUrl?: string

    apiServer: string

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [additional: string]: any
}

export { Router }
