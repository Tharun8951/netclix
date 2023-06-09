import React from 'react'
import logo from '../../logo.png'
import { Link, useNavigate } from 'react-router-dom'
import '../Header/Header.scss'

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className="header">
        <Link className='logoLink' to={'/'}>
          <img src={logo} alt="logo img"  className='logoImg'/>
          {localStorage.getItem('authTokenNetclix') ?
        <Link className='favpagenav' to="/favoritepage">My List</Link>
        :
        <>
        <Link onClick={()=>{
          alert('Please login first')
        }} className='favpagenav' to="/">My List</Link>
        </>
          }
        </Link>
        {localStorage.getItem('authTokenNetclix') ? 
        <Link onClick={()=>{
          localStorage.removeItem('authTokenNetclix')
        }} to='/' className='authButton'>Logout</Link>
        : 
        <Link to='/login' className='authButton'>Login</Link>
        }
      </nav>
    </>
  )
}

export default Header
