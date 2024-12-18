import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return ( 
  <>
    <Navbar />
    <Outlet />
  </>
  )
}

export default MainLayout

/*
COMMENTS:
We bring in the navbar here bc we want 
it to show on every page
*/