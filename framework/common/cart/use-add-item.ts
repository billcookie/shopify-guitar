import { handler } from "@framework/cart/use-add-item"

const useAddItem = () => {

  return (input: any) => {
    return {
      output: JSON.stringify(input) + "_MODIFIED"
    }
  }
  return handler.useHook()
}

export default useAddItem
