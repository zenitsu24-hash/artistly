'use client'

import { useState, useEffect } from 'react'
import data from '@/lib/artist.json'
import ArtistFilters from '@/components/artist/artistfilter'
import ArtistGrid from '@/components/artist/artistgrid'
import { Artist } from '@/lib/artist'

export default function ArtistLanding() {
  const [filters, setFilters] = useState({ category: 'all', location: 'all', price: 'all' })
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([])

  useEffect(() => {
    const result = data.filter((artist) => {
      const matchCategory = filters.category !== 'all' ? artist.category === filters.category : true
      const matchLocation = filters.location !== 'all' ? artist.location === filters.location : true
      const matchPrice =
        filters.price === 'low'
          ? artist.priceRange.includes('₹5,000') || artist.priceRange.includes('₹10,000')
          : filters.price === 'mid'
          ? artist.priceRange.includes('₹15,000') || artist.priceRange.includes('₹20,000')
          : filters.price === 'high'
          ? artist.priceRange.includes('₹30,000') || artist.priceRange.includes('₹40,000')
          : true

      return matchCategory && matchLocation && matchPrice
    })
    setFilteredArtists(result)
  }, [filters])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Artists</h1>
      <ArtistFilters filters={filters} onChange={setFilters} />
      <ArtistGrid artists={filteredArtists} />
    </div>
  )
}
