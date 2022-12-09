import React from 'react'
import { Link } from 'react-router-dom'
import './component_style.css'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Navbar() {
  const  localSt = localStorage.getItem('login')
  return (
    <div className='nav-bar_container'>
        <ul>

        {
          localSt? <>
        <li><Link className='link' to='/admin'>admin</Link></li>
          </>
      :
      <>
      <li><Link className='link' to='/'>Home</Link></li>
      <li><Link className='link login' to='/login'><AdminPanelSettingsIcon/></Link></li>
        </>
        }
        </ul>
    </div>
  )
}

export default Navbar