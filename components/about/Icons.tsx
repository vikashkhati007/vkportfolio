import React from 'react'
import IconSvgContainer from "@/components/IconSvgContainer";
import Image from "next/image";
const Icons = () => {
  return (
    <div className='flex justify-center items-center flex-wrap gap-2 p-2'>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/html.svg"} width={40} height={40} alt="html"/>
        }
      ></IconSvgContainer>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/css.svg"} width={40} height={40} alt="html"/>
        }
      ></IconSvgContainer>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/javascript.svg"} width={40} height={40} alt="html"/>
        }
      ></IconSvgContainer>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/typescript.svg"} width={40} height={40} alt="html"/>
        }
      ></IconSvgContainer>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/nodejs.svg"} width={40} height={40} alt="html"/>
        }
      ></IconSvgContainer>
       <IconSvgContainer
        icon={
          <Image src={"/socialmedia/mongodb.svg"} width={20} height={20} alt="html"/>
        }
      ></IconSvgContainer>
       <IconSvgContainer
        icon={
          <Image src={"/socialmedia/prisma.svg"} width={40} height={40} alt="html"/>
        }
      ></IconSvgContainer>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/reactjs.svg"} width={40} height={40} alt="html"/>
        }
      ></IconSvgContainer>
       <IconSvgContainer
        icon={
          <Image src={"/socialmedia/nextjs.svg"} width={40} height={40} alt="html"/>
        }
      ></IconSvgContainer>
    </div>
  )
}

export default Icons
