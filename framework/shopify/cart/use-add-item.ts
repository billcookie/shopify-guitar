import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"


export const handler: MutationHook = {
  fetcher: async ({fetch, input}) => {
    const response = await fetch({
      query: `query { hello }`
    })
    return response
  },
  useHook: ({fetch}) => {
    return async (input: any) => {
      const response = await fetch(input)
      return {
        output: response
      }
    }
  }
}

export default useAddItem
