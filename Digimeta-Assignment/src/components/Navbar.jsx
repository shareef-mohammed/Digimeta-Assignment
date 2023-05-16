import React, { useState } from 'react'
import Logo from '../../public/ant-design.svg'
import { AiOutlineQuestionCircle, AiOutlineSearch, AiOutlineBell,AiOutlineMenu  } from 'react-icons/ai'
import Languages from './Languages';

const Navbar = ({openSidebar}) => {
    const [search, setSearch] = useState(false);
    const [isHover, setIsHover] = useState(false)
    
  return (
    <div className='w-full fixed top-0 z-30 h-12 bg-[#001529] flex justify-between items-center' >
        <span className='flex ml-4'>
            <img className='h-7' src={Logo} alt="" /> 
            <p className='hidden md:block md:text-white md:ml-3 md:text-lg md:font-bold'>Ant Design Pro</p>
            <AiOutlineMenu className='md:hidden sm:block text-white m-2' onClick={openSidebar} />
        </span>
        <span className='flex items-center'>    
            {
                search ?
                <span className={`hidden mr-8 md:flex items-center transition duration-300 ease-in-out `} >
                    <AiOutlineSearch className='text-white mr-2' onClick={() => setSearch(false)} />
                    <input type="text" className='w-48 h-6 rounded-sm' />
                </span>
                : 
                <AiOutlineSearch className='hidden md:block text-white mr-8' onClick={() => setSearch(true)} />
            }
            <AiOutlineQuestionCircle className='text-white mr-5' />
            <AiOutlineBell className='text-white mr-5' />
            <span className='flex mr-7'>
                <img className='rounded-full h-6' src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="" />
                <p className='text-white ml-2'>Serati Ma</p>
            </span>
            <p className='text-white mr-5' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>文</p>
            <Languages isHover={isHover} />
        </span>
    </div>
  )
}

export default Navbar