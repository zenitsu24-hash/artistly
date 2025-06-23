'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-full bg-white border-t"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-indigo-600">Artistly</h2>
          <p className="text-sm text-gray-600 mt-2">
            Connecting artists with audiences. Book singers, dancers, speakers, and more.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
            <li><Link href="/artist" className="hover:text-indigo-600">Artists</Link></li>
            <li><Link href="/artist/onboarding" className="hover:text-indigo-600">Onboarding</Link></li>
            <li><Link href="/manager/dashboard" className="hover:text-indigo-600">Dashboard</Link></li>
          </ul>
        </div>

        {/* Contact / Extra */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Get in Touch</h3>
          <p className="text-sm text-gray-600">contact@artistly.com</p>
          <p className="text-sm text-gray-600">+91 98765 43210</p>
        </div>
      </div>

      <div className="border-t text-center py-4 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Artistly. All rights reserved.
      </div>
    </motion.footer>
  )
}
