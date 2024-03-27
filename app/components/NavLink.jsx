import Link from 'next/link'
import React from 'react'

const NavLink = ({href, title}) => {
  return (
    <Link
     href={href}
     className='block py-2 pl-3 text-[#ADB7BE] rounded md:p-0 hover:text-white'
    >
    {title}
    </Link>
  )
}

export default NavLink