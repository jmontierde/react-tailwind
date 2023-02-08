import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
function Navbar() {
  const [hide, setHide] = React.useState(true);



  return (
    <div>
      <nav className="relative container mx-auto p-6 flex justify-between">
        <h2>manage</h2>
        <ul className={hide ? 'hidden md:flex space-x-6 cursor-pointer' : 
        'block absolute space-y-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] right-12 top-16 py-6 px-36 text-center  bg-[#ffffff]  cursor-pointer md:static md:space-x-6  md:w-auto md:right-0 md:space-y-0 md:top-0 md:left-0 md:p-0 md:bg-white md:shadow-none md:flex'}>
          <li href="#" className='hover:text-[#e14736dd]'>Pricing</li>
          <li href="#" className='hover:text-[#e14736dd]'>Product</li>
          <li href="#" className='hover:text-[#e14736dd]'>About Us</li>
          <li href="#" className='hover:text-[#e14736dd]'>Careers</li>
          <li href="#" className='hover:text-[#e14736dd]'>Community</li>
        </ul>
        <button className='hidden md:block text-[#ffffff] rounded-full px-2.5 py-1 bg-[#E14736] hover:bg-[#d9402faf]'>Get Started</button>
       
       { hide
       ? <GiHamburgerMenu className={hide ? 'block md:hidden' : 'hidden'} onClick={() => setHide(prevHide => !prevHide)}  />
       : <AiOutlineClose className={hide ? 'hidden md:hidden' : 'block md:hidden'} onClick={() => setHide(prevHide => !prevHide)}/>}
      
       
      </nav>
    </div>
  );
}

export default Navbar