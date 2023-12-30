import React from 'react'
import { Link } from 'react-router-dom'
import { Img02, Img03, Img04, Img05, Img06, Img07, Img08 } from '../../App'

const Img2 = <Img02 />
const Img3 = <Img03 />
const Img4 = <Img04 />
const Img5 = <Img05 />
const Img6 = <Img06 />
const Img7 = <Img07 />
const Img8 = <Img08 />

export default function Quality() {
    const Btnlink =
        <Link to={'/'} className='bg-slate-700 hover:border border-slate-800 hover:text-black  text-white  hover:shadow-lg font-bold capitalize  md:px-4 md:py-3 px-2 py-1   rounded-lg'>buy now</Link>
    return (
        <>
            <section className='bg-slate-950 text-slate-300 md:py-10 py-5 md:my-10 my-5'>
                <div className='w-11/12 mx-auto text-center'>
                    <h1 className='text-5xl capitalize md:py-5 '>best quality </h1>
                    <p className='py-3 md:py-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, tempora.</p>
                    <div className='flex flex-col md:flex-row gap-10 '>

                        <div>
                            <Card img={Img2} price={`$ ${100}`} name={`Shoes`} />

                            <Link to={'/'} className='bg-slate-200 border border-slate-800 text-black  hover:text-white hover:bg-yellow-400 hover:shadow-lg font-bold capitalize  md:px-4 md:py-3 px-2 py-1   rounded-lg'>buy now</Link>

                        </div>
                        <div>
                            <Card img={Img3} price={`$ ${100}`} name={`Shoes`} />

                            <Link to={'/'} className='bg-slate-200 border border-slate-800 text-black  hover:text-white hover:bg-yellow-400 hover:shadow-lg font-bold capitalize  md:px-4 md:py-3 px-2 py-1   rounded-lg'>buy now</Link>

                        </div>
                        <div>
                            <Card img={Img4} price={`$ ${100}`} name={`Shoes`} />

                            <Link to={'/'} className='bg-slate-200 border border-slate-800 text-black  hover:text-white hover:bg-yellow-400 hover:shadow-lg font-bold capitalize  md:px-4 md:py-3 px-2 py-1   rounded-lg'>buy now</Link>

                        </div>
                        <div>
                            <Card img={Img5} price={`$ ${100}`} name={`Shoes`} />

                            <Link to={'/'} className='bg-slate-200 border border-slate-800 text-black  hover:text-white hover:bg-yellow-400 hover:shadow-lg font-bold capitalize  md:px-4 md:py-3 px-2 py-1   rounded-lg'>buy now</Link>

                        </div>

                    </div>
                </div>

            </section>

            <section className='w-11/12 text-center mx-auto'>
                <h1 className='text-4xl capitalize py-5'>best quality</h1>
                <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, illum nobis?</p>


                <div className='flex w-full mx-auto p-10 md:flex-row flex-col gap-10 items-center text-center'>
                    <div className='my-3'>
                        <Card img={Img6} heading={`Lorem ipsum dolor sit amet. `} para={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quidem modi  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quidem modi temporibus, a veritatis!temporibus, a veritatis!`} />
                        {Btnlink}

                    </div>
                    <div className='mt-4'>
                        <Card img={Img7} heading={`Lorem ipsum dolor sit amet.`} para={`Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quidem modi temporibus, a veritatis! adipisicing elit. Distinctio ut quidem modi temporibus, a veritatis!`} />
                        {Btnlink}

                    </div>
                    <div>
                        <Card img={Img8} heading={`Lorem ipsum dolor sit amet.`} para={` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quidem modi temporibus, a veritatis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quidem modi temporibus, a veritatis!`} />
                        {Btnlink}

                    </div>
                </div>
            </section>
        </>
    )
}


export function Card(props) {



    return (
        <div className='text-center   '>
            <picture className='md:w-32 h-20 md:h-auto object-cover '>{props.img}</picture>
            <h3 className='text-yellow-400 text-xl md:text-3xl font-bold py-2'>{props.price}</h3>
            <h2 className='text-xl py-2 md:text-4xl  '>{props.name}</h2>
            <h2 className='font-bold py-2'>{props.heading}</h2>
            <p className='py-2'>{props.para}</p>
        </div>
    )
}