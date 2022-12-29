import React from 'react'
import {Link ,useNavigate } from "react-router-dom"


function NavBar() {
  const navigate = useNavigate()
  const auth = localStorage.getItem('user'); // here checking if it is signin then no need to show sign in  and show logout only.  
  
  const logout = () =>{ // login out  the page from inside
    localStorage.clear() // clear the local storage
    navigate('/signUp')  // and re-direct to sign up
  }
  return (
    <div>
      <img alt='logo' className='logo' src='https://www.renaultgroup.com/wp-content/uploads/2021/03/nouveau_logo_renault.jpg' />
      {
        auth ? 
      
        <ul className='nav-ul'>
            <li><Link to='/dashboard'>DashBoard</Link></li>
            <li><Link to='/study'>Study material</Link></li>
            <li> <Link onClick={logout} to='/'>Logout </Link></li> 
          
        </ul> 
        :
        <ul className='nav-ul nav-right'>
             <li> <Link to='/signUp'>Signup</Link></li>
             <li><Link to='/'>Login</Link></li>
        </ul>
      }
            
           
    </div>
  )
}

export default NavBar