import React from 'react'
import { Navigationbar } from '../styles/styledComponents'
import Link from 'next/link'

interface NavbarProps{
    setColor?: string;
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({setColor = 'brown', className = ""}) => {
  return (
    <Navigationbar setColor={setColor} className={`${className} font-bold`}>
      <Link href="/signin"><button>Sign in</button></Link>
      <Link href="/signup"><button>Sign up</button></Link>
      <button>Logout</button>
    </Navigationbar>
  )
}

export default Navbar