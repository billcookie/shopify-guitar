import { UseAddItem } from "@common/cart/use-add-item"
import { useAddItem } from "@common/cart"
import { Cart } from "@common/types/cart"
import { MutationHook } from "@common/types/hooks"
import { CheckoutLineItemsAddPayload } from "@framework/schema"
import { checkoutToCart, getCheckoutId } from "@framework/utils"
import { checkoutLineItemsAddMutation } from "@framework/utils/mutations"
import useCart from "@common/cart/use-cart"

export default useAddItem as UseAddItem<typeof handler>

export type AddItemHookDescriptor = {
  fetcherInput: {
    variantId: string
    quantity: number
  }
  fetcherOutput: {
    checkoutLineItemsAdd: CheckoutLineItemsAddPayload
  }
  data: Cart
}


export const handler: MutationHook<AddItemHookDescriptor> = {
  fetcherOptions: {
    query: checkoutLineItemsAddMutation
  },
  fetcher: async ({fetch, options, input}) => {

    const variables = {
      checkoutId: getCheckoutId(),
      lineItems: [
        {
         variantId: input.variantId,
         quantity: 1
        }
      ]
    }

    const { data } = await fetch({
       ...options,
       variables
    })


    const cart = checkoutToCart(data.checkoutLineItemsAdd.checkout)
    return cart
  },
  useHook: ({fetch}) => () => {
    const { mutate: updateCart } = useCart()
    return async (input) => {
      const response = await fetch(input)
      await updateCart(response, false)
      return response
    }
  }
}

// old code below KEEP UNTIL IT WORKS WITH NEW

// export default useAddItem


// export const handler: MutationHook = {
//   fetcherOptions: {
//     query: `query { hello }`
//   },
//   fetcher: async ({fetch, options, input}) => {

//     const variables = {
//       checkoutId: getCheckoutId(),
//       lineItems: [
//         {
//          variantId: input.variantId,
//          quantity: 1
//         }
//       ]
//     }



//     const response = await fetch({
//        ...options,
//        variables
//     })

//     return response
//   },
//   useHook: ({fetch}) => {
//     return async (input: any) => {
//       const response = await fetch(input)
//       return {
//         output: response
//       }
//     }
//   }
// }
