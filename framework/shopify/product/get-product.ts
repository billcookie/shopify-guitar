import { ApiConfig } from "@common/types/api";
import { getProductQuery } from "@framework/utils"

const getProduct = async(config: ApiConfig): Promise<any> => {

  const { data } = await config.fetch<any>({
    query: getProductQuery, url: config.apiUrl
  })

  console.log(JSON.stringify(data, null, 2))
  return {
    product: {
      name: "Big product",
      slug: "my-slug"
    }
  }
}

export default getProduct
