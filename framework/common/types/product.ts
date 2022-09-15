// this file is just a test to learn and practice TypeScripr
export interface ProductImage {
  url: string
  alt?: string
}

export interface Product {
  id: string
  name: string
  description: string
  slug: string
  path:
  string
  image: ProductImage[]
}
