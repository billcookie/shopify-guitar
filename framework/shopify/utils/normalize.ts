import {
  ImageEdge,
  Product as ShopifyProduct
} from "../schema"

import { Product } from "@common/types/product"

function normalizeProductImages ({edges}: {edges: Array<ImageEdge>}) {
  return edges.map(({node: { originalSrc: url, ...rest}}) => {
    return {
      url: `/images/${url}`,
      ...rest
    }
  })
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle, // shopify version of title/name. It is used in URLs
    vendor,
    description,
    images: imageConnection,
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
    ...rest
  }

  return product
}
