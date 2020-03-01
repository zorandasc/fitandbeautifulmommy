import React from "react"
import { AppProvider } from "./src/context"
import "./src/components/layout1.css"
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
