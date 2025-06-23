'use client'

import { Artist } from '@/lib/artist'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{artist.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">Category: {artist.category}</p>
        <p className="text-sm text-gray-600">Location: {artist.location}</p>
        <p className="text-sm text-gray-600">Price: {artist.priceRange}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Ask for Quote</Button>
      </CardFooter>
    </Card>
  )
}
