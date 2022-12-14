import React from 'react'
import { Link } from 'react-router-dom'
import './component_style.css'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import {useNavigate} from  'react-router-dom'    

function Navbar() {
  const  localSt = localStorage.getItem('login')
  const Navigate = useNavigate();


  const logout = () =>{

    localStorage.clear()
     Navigate("/login");

  }

  return (
    <div className='nav-bar_container'>
        <ul>

        {
          localSt? <>
        <li><Link className='link' to='/admin'>Home</Link></li>
        <li><Link className='link' to='/add-question'>Add Question</Link></li>
        <li><Link className='link' to='/'>Play Quiz</Link></li>

        <li><Link className="link" style={{position: "absolute", color:"white",
    right: "0"}} onClick={logout} to='/login'><span className='admin_icon'>Logout({JSON.parse(localSt)})</span></Link></li>
          </>
      :
      <>
      <li><Link className='link' to='/'>Play Quiz</Link></li>
      <div className="right_nav_item">

      <li><Link className="link about_us" to='/about'>About Us</Link></li>
      <li>
        {
             <Link className='link login' to='/login'> <span className='admin_icon'><AdminPanelSettingsIcon style={{color:"white"}}/></span></Link>

        }     
        </li>

      </div>
      
        </>
        }
        </ul>
    </div>
  )
}

export default Navbar