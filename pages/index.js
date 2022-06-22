import Head from 'next/head'
import Image from 'next/image'
import Hero from '../component/Hero'
import Slider from '../component/Slider'
import Whyus from '../component/Whyus'
import { motion } from 'framer-motion'
import Contact from '../component/Contact'

export default function Home() {
  return (
    <div>
      <motion.div initial='hidden' animate='visible'
      variants={{
        hidden: {
          scale: .95,
          opacity: 0
        },
        visible: {
          scale:1,
          opacity:1,
          transition: {
            delay: .2
          }
        }
      }}
      >
      <Hero/>
      </motion.div>
      <motion.div initial='hidden' animate='visible'
      variants={{
        hidden: {
          scale: .95,
          opacity: 0
        },
        visible: {
          scale:1,
          opacity:1,
          transition: {
            delay: .4
          }
        }
      }}
      >
      <Whyus/>
      <Slider/>
      <Contact/>
      </motion.div>
    

    </div>
  )
}
