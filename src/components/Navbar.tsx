import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        {/* Serch bar */}
        <div className='hidden md:flex'>
            <Image src="/search.png" alt='search' width={14} height={14}/>
            <input type="text" placeholder='Search...' />
        </div>

        {/* Icon and User */}
    </div>
  )
}

export default Navbar