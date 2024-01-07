import React from 'react'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Work from '@/components/Work'

const page = () => {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <Work/>
    <Team/>
    <ContactUs/>
    </>
  )
}

export default page
