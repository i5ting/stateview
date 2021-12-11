import { createContext, useContext } from "react"

export type GlobalStateContent = {
  stateContent: Object,
  stateview: any,
  setStateview: (c: any) => void
}

export const StateContext = createContext<GlobalStateContent>({
  stateContent: {}, // set a default value
  stateview: null,
  setStateview: () => { },
})

export const useStateContext = () => useContext(StateContext)
