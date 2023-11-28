import React from 'react'

const Button = ({ text }) => {
  return (
    <div>
       <button className="bg-gray-600 text-white inline-flex transition-all items-center overflow-hidden  md:px-7 py-3 text-base px-3 relative group">
       <span className='w-0 bg-red-500 absolute left-0 ease-in-out duration-700 transition-all group-hover:w-full group-hover:h-full'>
       </span>
       <span className='z-10 block' >

       {text}
       </span>
       
</button>
    </div>
  )
}

export default Button
