import React from 'react'
import Banner from '../../Components/Home/Banner'
import Faq from '../../Components/Home/Faq'
import Testimonial from '../../Components/Home/Testimonial'
import Features from '../../Components/Home/Features'
import WeWorksWith from '../../Components/Home/WeWorksWith'
import Services from '../Service/Services'

export default function Home() {
  return (
    <section>
      <Banner/>
      <Features/>
      <WeWorksWith/>
      <Services/>
      <Faq/>
      <Testimonial/>
    </section>
  )
}
