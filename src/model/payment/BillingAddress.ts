interface BillingAddress {
    /** The given (or "first") name. */
    firstName: string

    /** The family (or "last") name. */
    lastName: string

    /** An optional company or organization name, such as "Acme Widget Company" or "Girl Scouts of America". */
    company?: string

    /** Street and house number */
    addressLine1: string

    /** Optional. Appartment, Suite, etc. */
    addressLine2?: string

    city: string

    /** A country or territory code. Refer to ISO 3166-2. */
    countryCode: string

    state?: string

    /** A postal code (in the United States, this is the ZIP code). */
    postalCode: string

    phoneNumber: string
}
export { BillingAddress }
