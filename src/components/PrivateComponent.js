import Admin from "../pages/Admin"
import Login from "../pages/Login"
import { Outlet } from "react-router-dom"
import {Navigate} from 'react-router-dom'

const PrivateComponent = () =>{
    const login = localStorage.getItem('login')
    return login? <Outlet/>: <Navigate to='/login'/>
}

export default PrivateComponent