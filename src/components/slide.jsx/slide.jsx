import React from 'react'
import { ClientImg1, Left1, Right1 } from '../../App'

const leftarrow = <Left1/>
const rightarrow = <Right1/>
const slideimg  = <ClientImg1/>
export default function Slide() {
  return (
<>
<section className=' relative'>
    <div className="card bg-slate-800 px-5 py-10 w-2/3 mx-auto max-h-fit md:my-10">
        <div className="card-header grid grid-cols-2 justify-center items-center  ">
            
        <picture className="md:px-10 px-5 object-cover">{slideimg}</picture>
        <h2 className="text-slate-300 text-xl md:-ml-56 -ml-20">Lorem, ipsum dolor. Lorem, ipsum dolor.</h2>
        <h3 className="md:ml-48 text-sm text-slate-300 py-3 md:-mt-10 ">Lorem ipsum dolor sit amet.</h3>
</div>        
<div className="card-body px-10 py-3 text-slate-300">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi ratione corrupti delectus provident! Harum quas modi voluptatem molestiae nam. Labore, sunt veritatis nihil recusandae molestiae aliquam consequatur repellat maxime! </p>
</div>
    </div>
    <div className="btn-group ">
        <button className='  absolute top-1/2 left-10'><span>{leftarrow}</span></button>
        <button className='absolute top-1/2 right-10'><span>{rightarrow}</span></button>
    </div>
</section>

</>

    )
}
