import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around p-8 items-center flex-col-reverse bg-[#191B1F] text-white md:flex-row '>
        <h1 className='space-y-6'>manage</h1>
        <div className='list-none flex m-8'>
          <div className='mr-16'>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About</li>
          </div>
          <div className='ml-16'>
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy</li>
          </div>
        </div>
        <div className='flex items-center  w-full md:w-64 md:-mt-16 '>
            <input className='w-10/12 h-8 rounded-full pl-3 text-gray md:w-52' type="text" name="mail" id="mail" placeholder='Update in your inbox'/>
            <button className="py-1 w-2/12 px-3 ml-3 bg-[#ef3f2cdd] hover:bg-[#c14537dd] 
             rounded-full baseline  
            md:w-14">
              Go
            </button>
        </div>
    </div>
  )
}

export default Footer