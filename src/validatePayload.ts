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
    if (!payload) {
        throw new Error('Invalid payload')
    }
    if (typeof payload !== 'object') {
        throw new Error('Invalid payload')
    }
    const obj = payload as Record<string, unknown>
    for (const key of keys) {
        if (Array.isArray(key)) {
            const required = key.length === 2 || key[2]
            if (obj[key[0]]) {
                if (typeof obj[key[0]] !== key[1]) {
                    throw new Error(`Invalid value ${typeof obj[key[0]]} for key: ${key[0]}`)
                }
            } else if (required) {
                throw new Error(`Missing key: ${key[0]}`)
            }
        } else {
            if (!obj[key]) {
                throw new Error(`Missing key: ${key}`)
            }
        }
    }
}
export { validatePayload }
