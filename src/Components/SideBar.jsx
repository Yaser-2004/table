import React from 'react'

const SideBar = ({pageName}) => {
  return (
    <div className='w-[300px] h-screen bg-gray-800 text-white text-left flex flex-col max-sm:hidden'>
      <p className='bg-gray-900 pl-16 py-4 hover:cursor-pointer'>{pageName}</p>
      <p className='pl-16 py-4 hover:cursor-pointer'>Product</p>
      <p className='pl-16 py-4 hover:cursor-pointer'>Services</p>
      <p className='pl-16 py-4 hover:cursor-pointer'>Contact</p>
    </div>
  )
}

export default SideBar
