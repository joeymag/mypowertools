import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import mytoolsafe2 from '../../../public/mytoolsafe2.png'

function Navbar() {
  return (
    <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-3 p-2 bg-black text-white  '>
      <div>
        <Image src={mytoolsafe2}
        width={300}
        height={50}
        />
      </div>
      <div className="gap-4 px-4 ">
        <Link className="px-4" href="/blog">
          Home
        </Link>
        <Link className="px-4" href="/contact">
         Contact
        </Link>
        <Link className="px-4" href="/about">
         About
        </Link>
        </div>

        <div className='gap-4 end'>
          <Link className="px-4" href="/login">
            Login
          </Link>
          <Link className="px-4" href="/signup">
            Signup
          </Link>
        </div>
      </div>
  )
}

export default Navbar