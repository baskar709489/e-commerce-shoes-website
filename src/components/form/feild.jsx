import React from 'react'

export default function Feild() {
  return (
<>
<div className="bg-slate-950 w-full ">
    <h2 className='text-slate-300 text-5xl font-bold capitalize md:px-32 px-12 md:py-10 py-3'>get in touch</h2>
  <div className='flex md:flex-row justify-between items-center mx-32 my-10 py-10 text-center '>
  <div className=''>
  <form action="" className=' max-w-96 flex flex-col gap-10'>
<input type="text" placeholder='Name' className='bg-slate-200 px-0 py-3 w-96' />
<input type="email"  placeholder='Email' className='bg-slate-200 px-0 py-3'/>
<input type="number" placeholder='Phone Number ' className='bg-slate-200 px-10 py-3'/>
<textarea name="comment" id="comment" cols="30" rows="30" placeholder='Message' className='bg-slate-200 px-10 py-3 h-40'></textarea>
   <input type="submit" value={'submit'} className='bg-yellow-400 rounded-sm px-10  py-4 w-32 hover:text-slate-900 capitalize text-black text-center font-bold'  />
    </form>
  </div>
    
    <div className="location-map">
        <iframe src=""  className='border md:-mt-32 rounded-lg  w-96 h-96 ' title='location-track' ></iframe>
    </div>
  </div>
</div>

</>  )
}
