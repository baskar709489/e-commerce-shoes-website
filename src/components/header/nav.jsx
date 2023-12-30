import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Banner1, Logo1, SearchImg1 } from '../../App'


const Logo = <Logo1/>
const Search = <SearchImg1/>

export default function Nav() {



    return (
    <>
    <nav className='flex justify-around md:justify-between items-center md:px-10 px-0  py-1 md:py-2 my-0 '>

<Link to={'/'} className=' w-20 md:w-56 absolute md:static left-5 top-7   ' > {Logo}    </Link>
<h2 className='text-slate-200 md:text-3xl text-sm font-bold hidden md:block capitalize bg-yellow-500 md:px-5 px-3 py-1 md:py-3 rounded-sm -ml-32 md:mr-1 '>no <br /><span className='text-slate-200' >01</span></h2>
<Link to={'/'} className='w-6 hidden md:block md:w-auto'>{Search}</Link>

    </nav>
    
    <Outlet/>
    </>
  )
}
