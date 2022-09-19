import { createContext, useContext, useState } from "react"

export interface StateModifiers {
  openSidebar: () => void
  closeSidebar: () => void
}

export interface StateValues {
  isSidebarOpen: boolean
}

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {}
}

const initialState = { isSidebarOpen: false }

type State = StateValues & StateModifiers


interface Props {
  children: React.ReactNode
}

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState
})

function UIProvider({children}: Props) {

  const openSidebar = () => alert("opening sidebar")
  const closeSidebar = () => alert("clsoign sidebar")

  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: false
  }

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => {
  const context = useContext(UIContext)
  return context
}

export default UIProvider
