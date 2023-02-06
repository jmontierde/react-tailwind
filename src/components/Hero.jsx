import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="container flex flex-col-reverse md:flex-row mx-auto px-6 mt-10 mb-0 align-center md:space-y-0">
        <div className='flex flex-col space-y-12 text-center md:w-1/2'>
            <h1 className='max-w-md text-2xl md:text-4xl md:text-left font-bold'>
              Bring everyone <br /> together to build <br /> better products.
            </h1>
            <p className='my-8 text-gray text-center  text-sm md:text-left'>Manage make it simple for software teams to plan <br />
                day-to-day tasks while keeping the larger team goals <br /> in views.
            </p>
            <button className="py-1 px-3 mx-auto bg-[#ef3f2cdd] hover:bg-[#d9402faf] text-white rounded-full baseline md:ml-0 md:py-2 md:px-4">Get Started</button>
        </div>
        <div className='grid grid-cols-3 md:mx-0 mx-auto place-items-center'>
            <img className='w-36 col-span-4  mr-6  md:w-52' src="./images/bar.png" alt="" />
            <img className='w-36 col-span-4 md:w-52' src="./images/circle.png" alt="" />
            <img className='w-48 h-3/4 col-span-8 md:w-80' src="./images/man.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Hero