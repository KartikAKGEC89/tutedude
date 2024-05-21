import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div class="flex flex-row pd-2 text-2xl m-5 header">
        <div class="mr-6">Logo</div>
        <div class="flex flex-row absolute top-4 right-6 text-center gap-6">
          
        <button class="text-pink-700 rounded-md p-2">
          Login
        </button>
        
        <button class="bg-pink-700 text-white rounded-md p-2">
          Signup
        </button>
          
        </div>
      </div>
      <div class="bg-black flex flex-grow text-white text-center text-xl justify-center navbar">
          <button class="px-2 py-2 hover:underline custom-underline">OverView</button>
          <button class="px-2 py-2 hover:underline custom-underline">Curriculum</button>
          <button class="px-2 py-2 hover:underline custom-underline">Refund</button>
          <button class="px-2 py-2 hover:underline custom-underline">Testimonials</button>
      </div>
    </>
  )
}

export default Navbar
