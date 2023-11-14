import React from 'react'

import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full border-t'>
      <div className="flex justify-center space-x-4 my-4">
        <a href="https://www.x.com/vikashkhati007"><FaTwitter size={24} /></a>
        <a href="https://www.instagram.com/vikashkhati007"><FaInstagram size={24} /></a>
        <a href="https://www.github.com/vikashkhati007"><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/vikashkhati007"><FaLinkedin size={24} /></a>
        
      </div>
      <div className="text-center my-4 text-sm md:text-base">
        &copy; 2023 My Company. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
