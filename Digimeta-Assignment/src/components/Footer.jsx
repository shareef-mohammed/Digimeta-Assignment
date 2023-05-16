import React from 'react'
import { AiOutlineGithub, AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-full mt-24 mb-10'>
        <span className='flex items-center text-gray-500 w-[50%] md:w-[25%] mx-auto justify-between'>
            <p>Ant Design Pro</p>
            <AiOutlineGithub />
            <p>Ant Design</p>
        </span>
        <span className='flex w-full md:w-[40%] items-center justify-center mx-auto text-gray-500'>
            <AiOutlineCopyrightCircle />
            <p>2023 Produced by Ant Financial Experience Department</p>
        </span>
    </div>
  )
}

export default Footer