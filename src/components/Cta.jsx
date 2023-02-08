import React from 'react'

const Cta = () => {
  return (
    <div className='mx-auto flex justify-between py-8 px-8 md:px-24 items-center bg-orange'>
      <div className='w-1/2 text-white font-bold md:text-2xl'>Simplify how your team works today</div>
      <div>
        <button className="py-1 px-3 mx-auto text-[#ef3f2cdd] hover:bg-[#f8f7f7e8] bg-[#ffffff] rounded-full baseline  md:py-2 md:px-4">Get Started</button>
      </div>
    </div>
  )
}

export default Cta