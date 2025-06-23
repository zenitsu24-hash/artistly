'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from '../mode-toggle'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Artist Landing', href: '/artistlanding' },
  { name: 'Artist Onboarding', href: '/artistonboarding' },
  { name: 'Manager Dashboard', href: '/managerdashboard' }
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/" className="text-xl font-bold text-indigo-600">
            Artistly
          </Link>
        </motion.div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium hover:text-indigo-600 transition ${
                  pathname === item.href ? 'text-indigo-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
           <ModeToggle/>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="md:hidden mt-2 flex flex-col space-y-2 bg-white px-4 pb-4 shadow-sm"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium hover:text-indigo-600 transition ${
                pathname === item.href ? 'text-indigo-600' : 'text-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}
