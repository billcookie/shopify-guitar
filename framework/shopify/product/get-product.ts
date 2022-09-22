import { ApiConfig, Variables } from "@common/types/api";
import { getProductQuery, normalizeProduct } from "@framework/utils"
import { Product as ShopifyProduct } from "@framework/schema"
import { Product } from "@common/types/product"
type Fetchtype = {
  productByHandle: ShopifyProduct
}

type ReturnType = {
  product: Product | null
}

const getProduct = async(options:{ config: ApiConfig, variables: Variables }): Promise<any> => {

  const { config, variables } = options
  const { data } = await config.fetch<Fetchtype>({
    query: getProductQuery,
    variables
  })

  console.log(JSON.stringify(data.productByHandle, null, 2))

  const { productByHandle } = data
  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null
  }
}

export default getProduct
