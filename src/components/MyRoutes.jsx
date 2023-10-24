import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Context } from "./Context"
import { Zustand } from "./Zustand"



export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/context-api" element={<Context/>} />
      <Route path="/zustand" element={<Zustand />} />
    </Routes>
  )
}
