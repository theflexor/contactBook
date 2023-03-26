export interface BookTypes {
    id: number
    name: string
    username: string
    email: string
    address: AdressTypes
    company: CompanyTypes
    phone: string
    website: string
}

export interface AdressTypes {
    city: string
    street: string
    suite: string
    zipcode: string
    geo: GeoTypes
}

export interface GeoTypes {
    lat: string
    lng: string
}

export interface CompanyTypes {
    name: string
    catchPhrase: string
    bs: string
}

export interface bookSliceTypes {
    list: BookTypes[]
    modal: boolean
    search: string
    editContact: BookTypes
    sort: string,
}
