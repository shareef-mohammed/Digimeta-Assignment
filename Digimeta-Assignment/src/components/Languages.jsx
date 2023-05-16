import React from 'react'
import { BsFlagFill } from 'react-icons/bs'

const Languages = ({isHover}) => {
    if(!isHover) return null
  return (
    <div className='absolute top-12 right-5 bg-white w-36 rounded-sm text-center'>
        <span className='flex items-center'>
            <BsFlagFill />
            <p>বাংলা</p>
        </span>
        <span className='flex items-center'>
            <BsFlagFill />
            <p>English</p>
        </span>
        <span className='flex items-center'>
            <BsFlagFill />
            <p>فارسی</p>
        </span>
        <span className='flex items-center'>
            <BsFlagFill />
            <p>Bahasa Indonesia</p>
        </span>
        <span className='flex items-center'>
            <BsFlagFill />
            <p>日本語</p>
        </span>
        <span className='flex items-center'>
            <BsFlagFill />
            <p>Português</p>
        </span>
        <span className='flex items-center'>
            <BsFlagFill />
            <p>简体中文</p>
        </span>
        <span className='flex items-center'>
            <BsFlagFill />
            <p>繁體中文</p>
        </span>
    </div>
  )
}

export default Languages