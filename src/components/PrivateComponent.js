import Admin from "../pages/Admin"
import Login from "../pages/Login"

const PrivateComponent = () =>{
    return localStorage.getItem('login')? <Admin/> : <Login/>
}

export default PrivateComponent