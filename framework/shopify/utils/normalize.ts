import {
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
  ProductVariantConnection,
  SelectedOption
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

const normalizeProductPrice = ({currencyCode, amount}: MoneyV2) => ({
    value: +amount,
    currencyCode
})

const normalizeProductOption = ({
  id,
  values,
  name: displayName


}: ProductOption) => {

  const normalized = {
    id,
    displayName,
    values: values.map(value => {
      let output: any = {
        label: value
      }

      // colours and hex variants
      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value
        }
      }
      return output
    })
  }


  return normalized
}

const normalizeProductVariant = ({ edges }: ProductVariantConnection) => {

  return edges.map(({node})=> {
    const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2} = node
    return {
      id,
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requiresShipping: true,
      options: selectedOptions.map(({name, value}: SelectedOption) => {
        const option = normalizeProductOption({
          id,
          name,
          values: [value]
        })

        return option
      })

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
    priceRange,
    options,
    variants,
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
    variants: variants ?
      normalizeProductVariant(variants) : [],
    ...rest
  }

  return product
}
