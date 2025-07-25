import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import NavItems from './NavItems'
// import sign from clerk 
import { SignInButton,SignedIn,SignedOut,UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='navbar '>
        <Link href='/'>
            <div className=" flex item-center gap-2.5 cursor-pointer">
                <Image src="/images/logo.svg" alt="Logo" width={46} height={44} className='' />
            </div>
        </Link>
        <div className="flex items-center gap-8 ">
            <NavItems/>
            <SignedOut>
                <SignInButton>
                  <button className='btn-signin'>Sign In</button>
                </SignInButton>
            </SignedOut>
            <SignedIn>              
                <UserButton />
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar