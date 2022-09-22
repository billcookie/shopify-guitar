import useCart from "@common/cart/use-cart";
import { createCheckout } from "@framework/utils"

export default useCart

export const handler = {
  fetchOptions: {
    // get checkout query
    query: "query {hello}"
  },

 async fetcher({
    fetch,
   options,
   input: { checkoutId }
  }: any) {
    const data = await fetch({...options})
     // we need checkout ID
     console.log(checkoutId)
     // Get checkout
    let checkout

     // If there is no checkout then create checkout
    if (checkoutId) {
      const { data } = await fetch ({
        ...options
      })

      checkout = data.node
    } else {
      checkout = await createCheckout(fetch)
    }
  },

  useHook: ({useData}: any) => {
    const data = useData()
    return {
      data
    }
  }
}
