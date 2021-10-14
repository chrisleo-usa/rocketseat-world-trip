export interface Country {
  slug: string
  name?: string
  flag?: string
  capital?: string
  imageUrl?: string
}
export interface Continent {
  id: number
  name?: string
  subtitle?: string
  description?: string
  imageUrl?: string
  countriesNumber?: number
  languagesQuantity?: number
  citiesNumber?: number
  countries?: Country[]
}