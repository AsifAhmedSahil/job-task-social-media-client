import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogout =() =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/media">Media</Link></li>

        {/* {
          user?.email && <li><Link to="/about">About</Link></li>
        } */}
        <li><Link to="/about">About</Link></li>
    </>
  return (
    <div className="navbar bg-green-300 text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
   <Link to="/" className="btn btn-ghost normal-case text-xl ">SK Media</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user?.email && <span className='hidden lg:block mr-5'>Welcome, {user?.email}</span>
    }
  
  {
    user?.email ? 
    <Link to="/login"><button  onClick={handleLogout} className="btn btn-success rounded bg-black text-white">Log out</button></Link>
    : 
    <Link to="/login"><button className="btn btn-success rounded bg-black text-white">Login</button></Link>
  }
  
  </div>
</div>
  )
}

export default Navbar