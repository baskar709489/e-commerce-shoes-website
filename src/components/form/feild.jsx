import React from 'react'

export default function Feild() {
  return (
<>
<div className="bg-slate-950 w-full  2xl:bg-slate-300 ">
    <h2 className='text-slate-300 md:text-4xl text-xl font-bold capitalize md:px-28 px-10 md:py-5 py-3'>get in touch</h2>
  <div className='flex md:flex-row flex-col justify-between items-center md:mx-2 md:my-5  md:py-5 text-center '>
  <div className=''>
  <form action="" className=' max-w-56  md:ml-3 lg:w-96 lg:mx-10 md:max-w-screen-md flex flex-col md:gap-6 gap-3 mx-auto'>
<input type="text" placeholder='Name' className='bg-slate-200 px-1 md:py-3 py-2 ' />
<input type="email"  placeholder='Email' className='bg-slate-200 px-1 md:py-3 py-2'/>
<input type="number" placeholder='Phone Number ' className='bg-slate-200 px-1  md:py-3 py-2'/>
<textarea name="comment" id="comment" cols="30" rows="30" placeholder='Message' className='bg-slate-200 px-2 py-3 md:h-40 h-36'></textarea>
   <input type="submit" value={'submit'} className='bg-yellow-400 rounded-sm md:px-10 px-5  md:py-3 py-2 my-3 md:my-3 w-32 hover:text-slate-900 capitalize text-black text-center font-bold'  />
    </form>
  </div>
    
    <div className="location-map">
        <iframe src=""  className='border md:mb-20 rounded-lg  lg:mx-14 lg:-mt-5 md:w-96 md:h-96 h-56 my-5 md:my-0 md:mx-4 ' title='location-track' ></iframe>
    </div>
  </div>
</div>

</>  )
}
