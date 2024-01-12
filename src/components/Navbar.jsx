import React from 'react'
import { links } from '../data'
const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="w-full px-8 py-4 flex flex-col sm:flex-row sm:gap-16">
        <h2 className="capitalize font-bold text-3xl leading-9">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-2 text-lg">
          {links.map((link) => {
            return (
              <a
                className="capitalize leading-9 tracking-wider hover:text-emerald-700"
                key={link.id}
                href={link.href}
              >
                {link.text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
