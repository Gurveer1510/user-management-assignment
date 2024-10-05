export default interface UserType {
    id: string
    name: string
    username: string
    email: string
    address: AddressType
    phone: string
    website?: string
    company?: CompanyType

}

interface AddressType {
    street: string
    suite?: string
    city: string
    zipcode?: string
    geo?: GeoLocType
}

interface CompanyType {
    name: string
    catchPhrase?: string
    bs?: string
}

interface GeoLocType {
    lat: string
    lng: string
}

export interface CreateUserType {
    name: string
    phone: string
    email: string
    username: string
    address: AddressType
}

export interface UpdateUserType extends CreateUserType{
    id: string
}

export interface FormFields {
    email: string
    name: string
    username: string
    phone: string
    city: string
    street: string
}