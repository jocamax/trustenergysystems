import React from 'react'
import Link from 'next/link'
import {AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id='footer'>
        <div className="footer-content">
            <h3>TrustEnergySystems</h3>
            <p>We care about the environment. We provide solutions for energy efficiency. From solar panel systems to other energy systems, we will give you a better experience!</p>
            <ul className="socials">
                <li><a href="#"><p><AiFillFacebook/></p></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy;2022 TrustEnergySystems</p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <Link href='/'><p className='footer-item' >Home</p></Link>
                        <Link href='/not-found'><p className='footer-item'>About</p></Link>
                        <Link href='/not-found'><p className='footer-item'>Contact</p></Link>
                        <Link href='/faq'><p className='footer-item'>Faq</p></Link>

                        
                      </ul>
                    </div>
        </div>
    </footer>
  )
}

export default Footer