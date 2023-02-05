import React from 'react'

const Navbar = () => {
  return (
    <div >
      <nav className="relative container mx-auto p-6 flex justify-between">
        <h2>manage</h2>
        <ul className='hidden md:flex space-x-6 cursor-pointer'>
          <li href="#" className='hover:text-[#e14736dd]'>Pricing</li>
          <li href="#" className='hover:text-[#e14736dd]'>Product</li>
          <li href="#" className='hover:text-[#e14736dd]'>About Us</li>
          <li href="#" className='hover:text-[#e14736dd]'>Careers</li>
          <li href="#" className='hover:text-[#e14736dd]'>Community</li>
        </ul>
        <button className='hidden md:block text-[#ffffff] rounded-full px-2.5 py-1 bg-[#E14736] hover:bg-[#d9402faf]'>Get Started</button>
      </nav>
    </div>
  )
}

export default Navbar