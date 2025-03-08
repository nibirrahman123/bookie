import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"

const Root = () => {
  return (
    <div className="max-w-[1650px] mx-auto px-2">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}

export default Root