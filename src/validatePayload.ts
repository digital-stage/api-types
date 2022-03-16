export interface ValidationTypes {
    String: 'string'
    Number: 'number'
    Object: 'object'
}

export type ValidationKey =
    | string
    | [string, ValidationTypes[keyof ValidationTypes]]
    | [string, ValidationTypes[keyof ValidationTypes], boolean]

const validatePayload = (payload: unknown, ...keys: ValidationKey[]): void => {
    if (!payload || typeof payload !== 'object') {
        throw new Error('Invalid payload')
    }
    keys.map((key) => {
        if (Array.isArray(key)) {
            const required = key.length === 2 || key[2]
            if (payload[key[0]]) {
                if (typeof payload[key[0]] !== key[1]) {
                    throw new Error(`Invalid value ${typeof payload[key[0]]} for key: ${key[0]}`)
                }
            } else if (required) {
                throw new Error(`Missing key: ${key[0]}`)
            }
        } else {
            if (!payload[key]) {
                throw new Error(`Missing key: ${key}`)
            }
        }
    })
}
export { validatePayload }
