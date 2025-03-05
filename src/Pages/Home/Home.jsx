import React from 'react'
import Banner from '../../Components/Home/Banner'
import Faq from '../../Components/Home/Faq'
import Testimonial from '../../Components/Home/Testimonial'
import Features from '../../Components/Home/Features'
import Service from '../Service/Service'
import WeWorksWith from './WeWorksWith'

export default function Home() {
  return (
    <section>
      <Banner/>
      <Service/>
      <WeWorksWith/>
      <Features/>
      <Testimonial/>
      <Faq/>
    </section>
  )
}
