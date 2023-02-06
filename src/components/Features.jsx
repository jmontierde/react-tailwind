import React from 'react'

const Features = () => {
  return (
    <div className='flex container flex-col mx-auto align-center p-6 mt-12 space-y-6 md:flex-row md:space-y-0 '>
      <div className='space-y-8 md:w-1/2 text-center md:text-left'>
        <h2 className='font-bold text-2xl md:text-2xl'>What's different about <br />Manage?</h2>
        <p className='text-gray text-sm'>Manage provides all the functionality your team <br /> reads, without the complexity.
           Our software is tailor- <br /> made for  digital product teams.
        </p>
      </div>
      <div>
        <ol className='flex flex-col space-y-6 text-sm text-left px-12 md:text-left md:base'>
          <li className='font-bold'>
            <span className="rounded-full bg-[#f96442] px-4 py-1 mr-2 text-[#f8f1f1]">1.</span>
            Track company-wide progress
          </li>
          <span className='ml-14 text-gray'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at <br />
                the milestone level all the way done to the smallest of details. Never lose sight of the <br />
                bigger picture again.
          </span>
          <li className='font-bold'>
            <span className="rounded-full bg-[#f96442]  px-4 py-1 mr-2 text-[#f8f1f1]">2.</span>
            Advanced built-in reports
          </li>
          <span className=' ml-14 text-gray'>Set interval delivery estimates and track progress toward company goals. Our <br />
                customisable dashboard helps you build out the reports you need to keep key <br />
                stakeholders informed.
          </span>

          <li className='font-bold'>
          <span className="rounded-full bg-[#f96442] px-4 py-1 mr-2 text-[#f8f1f1]">3.</span>
            Everything you need in one place
          </li>
          <span className='ml-14 text-gray'>Stop jumping from one service to another to communicate, store files, track task and <br />
                share documents. Manage offers an all-in-one team productivity solution.<br />
          </span>
        </ol>
      </div>
    </div>
  )
}

export default Features