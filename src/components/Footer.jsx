import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-evenly bg-gray-dark flex-col md:flex-row'>
        <h1>manage</h1>
        <div>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About</li>
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy</li>
        </div>
        <div className='flex items-center -mt-16'>
            <input className='w-100 h-8 rounded-full pl-3' type="text" name="mail" id="mail" placeholder='Update in your inbox'/>
            <button className="py-1 px-3 ml-3 text-[#ef3f2cdd] hover:bg-[#f3f1f0e8] bg-[#f9f3f3] rounded-full baseline  md:py-1 md:px-4">Go</button>

        </div>
    </div>
  )
}

export default Footer