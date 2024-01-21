import About from '@/components/body/About'
import Contact from '@/components/body/Contact'
import Intro from '@/components/body/Intro'
import Project from '@/components/body/Project'
import Skills from '@/components/body/Skills'
import Footer from '@/components/foot/Footer'
import Header from '@/components/head/Header'
import { Analytics } from '@vercel/analytics/react';
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Analytics/>
      <Footer/>
      </>
  )
}

export default page
