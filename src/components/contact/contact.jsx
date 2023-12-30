import React from 'react'
import { Link } from 'react-router-dom'
import { CycleImg1, FB1, LikdinImg1, TwitterImg1 } from '../../App'

const img  = <CycleImg1/>
const fb = <FB1/>
const twitter = <TwitterImg1/>
const youtube = <LikdinImg1/>
export default function Contact() {
    return (
        <>

            <section >
                <div className="bg-yellow-400 px-10 md:-mt-10 mt-0 ">
                    <div className='flex justify-between items-center'>

                        <div className='w-full'>
                            <h1 className='text-5xl capitalize font-bold px-3 py-2'>newslatter</h1>
                            <input type="email" placeholder='ENTER TOUR MAIL'  className='w-11/12 h-14 text-center uppercase rounded-xl'/>
                        </div>
                        <div className='   w-96 mx-auto text-center p-10'>
                            <div className="social-icons p-5">
                                <div className='flex py-5 w-32 mx-auto'>
                                    <i className='object-cover w-20'>{youtube}</i>
                                    <i className='object-cover w-20'>{twitter}</i>
                                    <i className='object-cover w-20'>{fb}</i>
                                    <i className='object-cover w-20'>{youtube}</i>
                                </div>
                                <Link to={'/youtube'} className='w-28 rounded-lg hover:bg-slate-300 bg-slate-800 px-5 py-3'>subscribe</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>


                    <div className="card-footer w-full bg-slate-950 text-slate-300 ">
                        <div className='items   row columns-4 mx-auto w-11/12  p-16 '>

                            <div className='text-center'>
                                <h2 className='text-md font-bold capitalize py-3'>useful link</h2>
                                <h6>it is a long</h6>
                                <h6>estabilshed</h6>
                                <h6>fact that a</h6>
                                <h6>reader will be</h6>
                                <h6>distracted by</h6>
                                <h6>the readable</h6>
                            </div>
                            <div  className='text-center'>
                                <h2 className='text-md font-bold capitalize py-3'>features items</h2>
                                <h6>it is a long</h6>
                                <h6>estabilshed</h6>
                                <h6>fact that a</h6>
                                <h6>reader will be</h6>
                                <h6>distracted by</h6>
                                <h6>the readable</h6>
                            </div>
                            <div className='text-center '>
                                <h2 className='text-md font-bold  text-center capitalize py-3'>instagram </h2>
                                <div className='text-center  w-56 mx-auto'>
                                    <div className='flex mb-3  items-center '>
                                        <picture className=' object-cover bg-transparent'>{img}</picture>
                                        <h4>it is a long estab</h4>
                                    </div>
                                    <div className='flex'>
                                        <picture className='mb-3'>{img}</picture>
                                        <h4>it is a long estab</h4>
                                    </div>
                                    <div className='flex'>
                                        <picture className='mb-3 '>{img}</picture>
                                        <h4>it is a long estab</h4>
                                    </div>
                                </div>
                                <div className='tet-center'>
                                    <h2 className='text-md font-bold capitalize py-3'>contact us</h2>
                                    <h6>it is a long</h6>
                                    <h6>estabilshed</h6>
                                    <h6>fact that a</h6>
                                    <h6>reader will be</h6>
                                    <h6>distracted by</h6>
                                    <h6>the readable</h6>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <h3 className='text-2xl  capitalize text-center py-10'>copyright 2024 all right reversed by free html temlplate</h3>
            </section>


        </>)
}
