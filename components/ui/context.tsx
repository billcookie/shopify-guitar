import { createContext, FC, useContext } from "react"

interface Props {
  children: React.ReactNode
}

const UIContext = createContext<{[key: string]: string}>({
  uiState: "defaultState"
})

function UIProvider({children}: Props) {
  return (
    <UIContext.Provider value={{uiState: "someState"}}>
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => {
  const context = useContext(UIContext)
  return context
}

export default UIProvider
