import {
  ImageEdge,
  Product as ShopifyProduct
} from "../schema"

import { Product } from "@common/types/product"
import { MoneyV2 } from "../schema"

function normalizeProductImages ({edges}: {edges: Array<ImageEdge>}) {
  return edges.map(({node: { originalSrc: url, ...rest}}) => {
    return {
      url: `/images/${url}`,
      ...rest
    }
  })
}

const normalizeProductPrice = ({currencyCode, amount}: MoneyV2) => ({
    value: +amount,
    currencyCode
})

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle, // shopify version of title/name. It is used in URLs
    vendor,
    description,
    images: imageConnection,
    priceRange,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g,""), // regex
    image: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest
  }

  return product
}
