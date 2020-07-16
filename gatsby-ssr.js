import React from "react"
import { AppProvider } from "./src/context"
import "./src/components/layout.css"
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
