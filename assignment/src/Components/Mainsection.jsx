import React from 'react'
import hat from "./assets/Hat.png"
import "./Mainsection.css"

const Mainsection = () => {
  return (
    <>
       <div className="relative flex flex-col">
            <div className="absolute border-2 border-yellow-500 m-16 rounded-lg p-4 flex gap-4 ">
                <img src={hat} alt='Hat'/>
                <p className="text-3xl hatsection">An <span className="font-bold">IIT Delhi</span> Alumni Initiative</p>  
            </div>
            <div className='mx-16 my-36 text-7xl mainsection'>
                  <p className='text-gray-700 font-extrabold'>Become an Expert in the</p>
                  <p className='text-gray-700 font-extrabold'> field of <span className='text-pink-700 font-extrabold'>Data Science</span></p>
                  <p className='text-pink-700 font-extrabold'>with 6 courses</p>
                  <p className='text-3xl kick'>A specially crafted Tech Kickstarter, with<span className='font-bold'> 5+ extensive online courses.</span></p>
            </div>
        </div>
    </>
  )
}

export default Mainsection
