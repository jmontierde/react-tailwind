import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="container flex mx-auto py-12 justify-between">
        <div>
            <h1 className='text-4xl font-bold'>Bring everyone <br /> together to build <br /> better products.</h1>
            <p className='my-8 text-gray text-sm'>Manage make it simple for software teams to plan <br />
                day-to-day tasks while keeping the larger team goals <br /> in views.
            </p>
            <button className="py-1.5 px-3 bg-[#ef3f2cdd] text-white rounded-full">Get Started</button>
        </div>
        <div className='grid grid-cols-3'>
            <img className='w-48 col-span-4 mr-6' src="./images/bar.png" alt="" />
            <img className='w-48 col-span-4' src="./images/circle.png" alt="" />
            <img className='w-96 col-span-8' src="./images/man.png" alt="" />
        </div>

      </div>
    </>
  )
}

export default Hero