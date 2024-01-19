import Image from 'next/image'

import Hero from './Hero/Hero'
import About from './About/About'
import Proyectos from './Proyectos/proyectos'
import Contacto from './Contacto/Contacto'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Proyectos/>
      <Contacto/>
    </div>
  )
}
