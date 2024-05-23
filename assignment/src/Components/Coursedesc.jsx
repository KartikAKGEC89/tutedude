import React from 'react'
import Eye from './assets/Eye.png'
import './Coursedesc.css'

const Coursedesc = () => {
  return (
    <div className='my-6 bg-pink-50 p-4 cardcontent'>
       <button className='p-2 border-2 border-solid border-pink-900 text-pink-500 rounded-xl w-half flex mx-auto flex-wrap'>
           DATASCIENCE COURSE LEARNING PATH
       </button>
       <div class="flex justify-center items-center my-4">
       <p className="w-1/2 text-center text-4xl font-bold flex-wrap">
           <span className="text-pink-500">Data Science </span> Course Curriculum
       </p>
       </div>
          <div className="card rounded-md w-1/2 m-auto">
      <div className='flex my-4'>
        <div>
          <h1 className='font-bold'>C++</h1>
          <p>Learn C++ for strong programming fundamentals.</p>
        </div>
        <button className="text-center font-bold flex-wrap border-2 rounded-full border-solid p-1 border-pink-900 ml-auto bg-pink-50">
          <p className='flex'>
            <img src={Eye} alt='eye' className='w-4 mx-1 eye'/>
            <span className="text-pink-500">View Curriculum</span>
          </p>
        </button>
      </div>
      <hr className='border-solid border-1' />
      <div className='flex my-4'>
        <div>
          <h1 className='font-bold'>MERN Stack</h1>
          <p>Master the MERN stack for high-demand projects.</p>
        </div>
        <button className="text-center font-bold flex-wrap border-2 rounded-full border-solid p-1 border-pink-900 ml-auto bg-pink-50">
          <p className='flex'>
            <img src={Eye} alt='eye' className='w-4 mx-1 eye'/>
            <span className="text-pink-500">View Curriculum</span>
          </p>
        </button>
      </div>
      <hr className='border-solid border-1' />
      <div className='flex my-4'>
        <div>
          <h1 className='font-bold'>Data Structure & Algorithm</h1>
          <p>Excel in Data Structures and Algorithms for interview success.</p>
        </div>
        <button className="text-center font-bold flex-wrap border-2 rounded-full border-solid p-1 border-pink-900 ml-auto bg-pink-50">
          <p className='flex'>
            <img src={Eye} alt='eye' className='w-4 mx-1 eye'/>
            <span className="text-pink-500">View Curriculum</span>
          </p>
        </button>
      </div>
      <hr className='border-solid border-1' />
      <div className='flex my-4'>
        <div>
          <h1 className='font-bold'>Competitive Programming</h1>
          <p>Excel in Data Structures and Algorithms for interview success.</p>
        </div>
        <button className="text-center font-bold flex-wrap border-2 rounded-full border-solid p-1 border-pink-900 ml-auto bg-pink-50">
          <p className='flex'>
            <img src={Eye} alt='eye' className='w-4 mx-1 eye'/>
            <span className="text-pink-500">View Curriculum</span>
          </p>
        </button>
      </div>
    </div>
    </div>
  )
}

export default Coursedesc
