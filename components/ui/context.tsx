import { createContext, useContext, useState } from "react"

interface Props {
  children: React.ReactNode
}

const UIContext = createContext<{[key: string]: any}>({
  uiState: "defaultState"
})

function UIProvider({children}: Props) {

  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const uiState = {
    isSidebarOpen,
    setSidebarOpen
  }
  return (
    <UIContext.Provider value={uiState}>
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => {
  const context = useContext(UIContext)
  return context
}

export default UIProvider
