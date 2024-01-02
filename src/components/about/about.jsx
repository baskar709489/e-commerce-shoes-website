import React from 'react'
import { Link } from 'react-router-dom'
import { Img01 } from '../../App'


const img1 = <Img01/>
export default function About() {
  return (
    <div>
        <section >
            <div className='w-11/12 mx-auto my-10 md:my-20 '>
                <div className=" md:px-10  px-3 md:py-5 py-2 md:flex justify-around items-center border   border-red-500">
                        <div className='  md:px-5 px-2 md:w-1/2 w-full flex  flex-col  md:py-5 py-2'>
                            <h1 className='md:text-5xl capitalize md:px-5 md:py-4 py-2  text-xl font-bold    text-black'><span className='bg-yellow-500 md:px-3 px-2 py-0  md:w-20  w-10 '></span> about our shop </h1>
                            <p className='px-5 w-full h-32 md:px-10 pb-5 md:pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, alias! Ducimus qui fugiat, odio veniam quia minima laborum esse commodi!</p>

                            <br />
                            <Link className='bg-slate-900 mx-auto  text-center md:px-5 md:py-3 md:w-40 w-32  py-2  md:mx-10   rounded-md hover:bg-slate-200 hover:text-slate-900 capitalize font-bold text-white '>read more </Link>
                        </div> 
  <div className='md:w-1/2  w-56 sm:w-96'>
    <Link to={'/'} className='mx-auto w-56 sm:w-96 ' >{img1}</Link>
    
    </div>                                                
                                  
                
                </div>
            </div>
        </section>
    </div>
  )
}
