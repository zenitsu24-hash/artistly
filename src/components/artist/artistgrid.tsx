'use client'

import ArtistCard from './artistcard'
import { Artist } from '@/lib/artist'

export default function ArtistGrid({ artists }: { artists: Artist[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  )
}
