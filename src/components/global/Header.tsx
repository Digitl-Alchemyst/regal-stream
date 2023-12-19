import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import SearchInput from './SearchInput'

function Header() {
  return (
    <header className='flex py-2 px-6 justify-between fixed w-full z-20 top-o items-center bg-gradient-to-t from-rsroyal-400/0 via-rsroyal-800/25 to-rsroyal-900'>
      <Link href='/'>
        <Image src='/Logo.png' alt='' width={45} height={45} className='hover:cursor-pointer'/>
      </Link>

      <div className='flex space-x-2'>
        {/* Genre Dropdown Menu  */}

        {/* Search Bar  */}
        <SearchInput />
        {/* Dark Light Mode Toggle  */}
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header