import useCart from "@common/cart/use-cart";
import { createCheckout, getCheckoutQuery } from "@framework/utils"
import { useMemo } from "react"

export default useCart

export const handler = {
  fetchOptions: {
    // get checkout query
    query: getCheckoutQuery
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
        ...options,
        variables: {
          checkoutId
        }
      })

      checkout = data.node
    } else {
      checkout = await createCheckout(fetch)
    }
  },

  useHook: ({useData}: any) => {
    const data = useData({
      swrOptions: {
        revalidateOnFocus: false
      }
    })

    return useMemo(() => {
      // debugger
      return data
    }, [data])
  }
}
