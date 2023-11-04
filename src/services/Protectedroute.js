import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const Protectedroute = () => {
    const auth=localStorage.getItem("logeduser")
  return auth? <Outlet/>:<Navigate to={"/login"}/>
}

export default Protectedroute