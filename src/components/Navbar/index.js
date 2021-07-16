import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as CgIcons from "react-icons/cg"
import { Link } from 'react-router-dom'
import { NavbarData } from '../NavbarData'
import { IconContext } from 'react-icons';
import './Navbar.css'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <CgIcons.CgClose />
              </Link>
            </li>
            {NavbarData.map((item, i) => {
              return (
                <li key={i} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
