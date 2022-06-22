import React from 'react'
import Link from 'next/link'
import { useRef } from 'react'
import {FaBars} from 'react-icons/fa'

function Nav() {
  const navRef = useRef()

  const showNavbar= () =>{
    navRef.current.classList.toggle('responsive_nav')
  }
  const removeClass =()=>{
    navRef.current.classList.remove('responsive_nav')
  }

  return (
    <header>
    <nav className='menu-container' >
      <div className='nav-div'>
        <Link className='nav-item-no-underline' href='/'>
          <h2 className='logo'>
            <span className='green2'>Trust</span>EnergySystems
          </h2>
          </Link>
        <div className='nav-items' ref={navRef}>
        <Link className='nav-item-no-underline nav-title-responsive' href='/'>
          <h2 onClick={removeClass} className='logo nav-title-responsive'>
            <span className='green2'>Trust</span>EnergySystems
          </h2>
          </Link>
        <Link href='/not-found'><p  onClick={removeClass} className='nav-item'>About</p></Link>
          <Link href='/products'><p onClick={removeClass} className='nav-item'>Products</p></Link>
          <Link href='/faq'><p  onClick={removeClass} className='nav-item'>Faq</p></Link>

        </div>

      </div>
    </nav>
    <button className='nav-button' onClick={showNavbar}>
      <FaBars/>
    </button>
    </header>
  )
}

export default Nav