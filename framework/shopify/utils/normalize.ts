import {
  ImageEdge,
  Product as ShopifyProduct,
  ProductOption
} from "../schema"

import { Product } from "@common/types/product"
import { MoneyV2 } from "../schema"
import { urlToHttpOptions } from "url"

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


const normalizeProductOption = ({
  id,
  values,
  name: displayName


}: ProductOption) => {
  console.log("ID", id)
  console.log("NAME", displayName)
  console.log("values", values)


  return{}
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle, // shopify version of title/name. It is used in URLs
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
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
    options: options ?
      options.filter(o => o.name !== "Title").map(o => normalizeProductOption(o)) :
      [],
    ...rest
  }

  return product
}
