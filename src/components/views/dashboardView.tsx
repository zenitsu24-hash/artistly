"use client"

import ArtistTable from '@/components/artisttable/artist-table'
import { mockArtists } from '@/lib/mock-artist'
import { motion } from 'framer-motion'

export default function ManagerDashboardView() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Manager Dashboard</h1>
      <ArtistTable artists={mockArtists} />
    </motion.main>
  )
}
