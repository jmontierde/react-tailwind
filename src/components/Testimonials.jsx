import React from 'react'

const Testimonials = () => {
  return (
    <div className='container mx-auto my-6 p-6 md:space-y-6 '>
        <h2 className='font-bold text-center text-2xl'>What's Different About Manage?</h2>
        {/* <div className='flex items-center justify-center'> */}
        <div className='flex flex-col  py-12 justify-center md:flex-row md:space-x-6'>
            <div className='flex flex-col items-center p-6 space-y-6 my-6 rounded-lg bg-[#dedede] md:w-1/4'>
                <img className='w-16 h-16 -mt-14 rounded-full' src="./images/profile-1.jpg " alt="" />
                <h5 className='font-bold'>John</h5>
                <p className='text-center'>"Manage has super changed our team's workflow. The ability to maintain visibility on
                larger milestone at all times keep everyone motivated."</p>
            </div>

            <div className='flex flex-col items-center p-6 space-y-6 my-6 rounded-lg bg-[#dedede] md:w-1/4'>
                <img className='w-16 h-16 -mt-14 rounded-full' src="./images/profile2.jpg " alt="" />
                <h5 className='font-bold'>Olivia</h5>
                <p className='text-center'>"We have been able to cancel so many other subscription since using Manage. There is no
                more cross-channel confusion and everyone is much more focused."</p>
            </div>

            <div className='flex flex-col items-center p-6 space-y-6 my-6 rounded-lg bg-[#dedede] md:w-1/4'>
                <img className='w-16 h-16 -mt-14 rounded-full' src="./images/profile3.jpg " alt="" />
                <h5 className='font-bold'>Liam</h5>
                <p className='text-center'>"Manage has super changed our team's  workflow. The ability to maintain visibility on 
                larger milestone at all times keep everyone motivated."</p>
            </div>
        </div>
        <button className="flex items-center py-1 px-3 mx-auto bg-[#ef3f2cdd] hover:bg-[#d9402faf] text-white rounded-full baseline  md:py-2 md:px-4">Get Started</button>

    </div>
  )
}

export default Testimonials