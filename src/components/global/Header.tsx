import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import SearchInput from './SearchInput'
import GenreDropdown from './GenreDropdown'


function Header() {
  return (
    <header className='flex py-2 px-6 justify-between fixed w-full z-20 top-o items-center bg-gradient-to-t from-rssilver-400/0 via-rssilver-800/25 to-rssilver-900'>
      <Link href='/'>
        <Image src='/LogoFull.png' alt='' width={125} height={45} className='hover:cursor-pointer'/>
      </Link>

      <div className='flex space-x-2'>
        {/* Genre Dropdown Menu  */}
        <GenreDropdown />
        {/* Search Bar  */}
        <SearchInput />
        {/* Dark Light Mode Toggle  */}
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header