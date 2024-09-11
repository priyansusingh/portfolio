'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Priyansu
            </span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <NavLink href="#home" onClick={toggleMenu}>Home</NavLink>
          <NavLink href="#about" onClick={toggleMenu}>About</NavLink>
          <NavLink href="#skills" onClick={toggleMenu}>Skills</NavLink>
          <NavLink href="#projects" onClick={toggleMenu}>Projects</NavLink>
          <NavLink href="#contact" onClick={toggleMenu}>Contact</NavLink>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children, onClick }) {
  return (
    <Link 
      href={href} 
      className="block py-2 px-4 hover:bg-gray-800 rounded transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}