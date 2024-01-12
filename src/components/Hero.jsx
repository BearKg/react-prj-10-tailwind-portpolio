import React from 'react'
import hero from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className="py-24 bg-emerald-100">
      <div className="grid md:grid-cols-2 items-center gap-8 px-8">
        <div className="tracking-widest">
          <h1 className="text-7xl font-bold capitalize">I'm van</h1>
          <h2 className="text-3xl capitalize mt-4 text-slate-700">
            fullstack developer
          </h2>
          <p className="text-lg mt-2 capitalize text-slate-700">
            Turning Ideas Into Interactive Reality
          </p>
          <div className="flex gap-x-4 text-slate-500 mt-4">
            <FaGithubSquare className="h-8 w-8 hover:text-slate-950 hover:cursor-pointer" />
            <FaLinkedin className="h-8 w-8 hover:text-slate-950 hover:cursor-pointer" />
            <FaSquareXTwitter className="h-8 w-8 hover:text-slate-950 hover:cursor-pointer" />
          </div>
        </div>
        <article className="hidden md:block">
          <img src={hero} alt="introducing image" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  )
}

export default Hero
