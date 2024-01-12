import React from 'react'
import about from '../assets/about.svg'
const About = () => {
  return (
    <div className="sample-page bg-white grid grid-cols-1 sm:grid-cols-2 gap-x-16">
      <img
        src={about}
        alt="about image"
        className="h-64 w-full hidden md:block"
      />

      <div>
        <h2 className="title">code and coffee</h2>
        <p className="mt-8 text-slate-500 tracking-wider leading-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores
          itaque doloribus asperiores dolorum quas voluptates distinctio, porro
          beatae quam provident libero animi totam, praesentium voluptatem
          corrupti dignissimos ipsum accusantium!
        </p>
      </div>
    </div>
  )
}

export default About
