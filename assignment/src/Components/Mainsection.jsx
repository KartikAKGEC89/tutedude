import React from 'react'
import hat from "./assets/Hat.png"
import "./Mainsection.css"
import award from './assets/award.png'
import vector from './assets/Vector.png'
import question from './assets/question.png'
import graduate from './assets/Online.png'
import rectangle from './assets/Rectangle.png'
import boy from './assets/Graduated.png'
import doubt from './assets/Cloudquestion.png'
import complete from './assets/Complete.png'

const Mainsection = () => {
  return (
    <>
       <div className="relative flex flex-col">
            <div className="absolute border-2 border-yellow-500 m-16 rounded-lg p-4 flex gap-4 ">
                <img src={hat} alt='Hat' className='graduation'/>
                <p className="text-3xl hatsection">An <span className="font-bold">IIT Delhi</span> Alumni Initiative</p>  
            </div>
            <div className='mx-16 my-36 text-7xl mainsection'>
                  <p className='text-gray-700 font-extrabold'>Become an Expert in the</p>
                  <p className='text-gray-700 font-extrabold'> field of <span className='text-pink-700 font-extrabold'>Data Science</span></p>
                  <p className='text-pink-700 font-extrabold'>with 6 courses</p>
                  <p className='text-2xl kick'>A specially crafted Tech Kickstarter, with<span className='font-bold mainbold'> 5+ extensive online courses.</span></p>
                  <div className='flex gap-2 badge'>
                      <button className='text-xl text-yellow-700 flex gap-1 bg-yellow-100 p-2 rounded-3xl'><img src={award} alt='award' />Personal Mentorship</button>
                      <button className='text-xl text-yellow-700 flex gap-1 bg-yellow-100 p-2 rounded-3xl'><img src={award} alt='award' />Internship Assistance</button>
                      <button className='text-xl text-yellow-700 flex gap-1 bg-yellow-100 p-2 rounded-3xl'><img src={award} alt='award' />Industry Certified Courses</button>
                  </div>
                  <div className='flex text-xl flex-row my-2 enroll'>
                      <button class="bg-pink-700 text-white rounded-md p-2 flex gap-2">Enroll Now <img src={vector} alt='vector' className='m-1'/></button>
                      <button class="text-pink-700 rounded-md p-2 flex gap-2">Know More <img src={question} alt='question' className='m-1'/></button>
                  </div>
            </div>
            <div className='bg-pink-50 flex flex-wrap p-6 acheivement'>
              <div className='flex mx-10 gap-4'><img src={graduate} alt='Graduate' className='w-20'/><div className='text-4xl text-grey-900 flex flex-col my-3'><span className='text-pink-700'>24</span>Courses</div></div>
              <img src={rectangle} alt='sepration' />
              <div className='flex mx-10 gap-4'><img src={boy} alt='Graduate' className='w-20'/><div className='text-4xl text-grey-900 flex flex-col my-3'><span className='text-pink-700'>30k+</span>Learners</div></div>
              <img src={rectangle} alt='sepration' />
              <div className='flex mx-10 gap-4'><img src={doubt} alt='Graduate' className='w-20'/><div className='text-4xl text-grey-900 flex flex-col my-3'><span className='text-pink-700'>100k+</span>Doubts Solved</div></div>
              <img src={rectangle} alt='sepration' />
              <div className='flex mx-10 gap-4'><img src={complete} alt='Graduate' className='w-20'/><div className='text-4xl text-grey-900 flex flex-col my-3'><span className='text-pink-700'>10k+</span>Student Projects</div></div>
            </div>
        </div>
    </>
  )
}

export default Mainsection
