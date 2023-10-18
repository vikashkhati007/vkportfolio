import React from 'react'
import IconSvgContainer from "@/components/IconSvgContainer";
import Image from "next/image";
const Icons = () => {
  return (
    <div className='flex justify-start items-center flex-wrap gap-2'>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/html.svg"} width={40} height={40} alt="html"/>
        }
      ></IconSvgContainer>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/css.svg"} width={40} height={40} alt="css"/>
        }
      ></IconSvgContainer>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/javascript.svg"} width={40} height={40} alt="javascript"/>
        }
      ></IconSvgContainer>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/typescript.svg"} width={40} height={40} alt="typescript"/>
        }
      ></IconSvgContainer>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/nodejs.svg"} width={40} height={40} alt="nodejs"/>
        }
      ></IconSvgContainer>
       <IconSvgContainer
        icon={
          <Image src={"/socialmedia/mongodb.svg"} width={20} height={20} alt="mongodb"/>
        }
      ></IconSvgContainer>
       <IconSvgContainer
        icon={
          <Image src={"/socialmedia/prisma.svg"} width={40} height={40} alt="prisma"/>
        }
      ></IconSvgContainer>
      <IconSvgContainer
        icon={
          <Image src={"/socialmedia/reactjs.svg"} width={40} height={40} alt="reactjs"/>
        }
      ></IconSvgContainer>
       <IconSvgContainer
        icon={
          <Image src={"/socialmedia/nextjs.svg"} width={40} height={40} alt="nextjs"/>
        }
      ></IconSvgContainer>
       <IconSvgContainer
        icon={
          <Image src={"/socialmedia/tailwindcss.svg"} width={40} height={40} alt="tailwindcss"/>
        }
      ></IconSvgContainer>
    </div>
  )
}

export default Icons
