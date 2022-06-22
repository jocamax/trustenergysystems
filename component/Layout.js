// eslint-disable-next-line react/display-name
import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Head from 'next/head'


const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>TrustEnergySystems - Prodaja solarnih panela i ostalih energetski efikasnih sistema</title>
        <meta name='keywords' content='solarni paneli, paneli, solarni sistemi, solar panels, green energy'/>

      </Head>
        <Nav/>
        <main className='main-content'>
            {children}
        </main>
        <Footer/>
    </div>

  )
}

export default Layout