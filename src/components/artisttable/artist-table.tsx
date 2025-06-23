import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Artist {
  name: string
  category: string[]
  location: string
  fee: string
}

interface Props {
  artists: Artist[]
}

export default function ArtistTable({ artists }: Props) {
  if (artists.length === 0) {
    return (
      <Card className="text-center p-6">
        <CardHeader>
          <CardTitle>No Submissions Yet</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Artists will appear here once they submit the onboarding form.
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg">
        <thead className="bg-gray-100 text-xs uppercase text-gray-600">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">City</th>
            <th className="px-4 py-3">Fee</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-2 font-medium">{artist.name}</td>
              <td className="px-4 py-2">{artist.category.join(', ')}</td>
              <td className="px-4 py-2">{artist.location}</td>
              <td className="px-4 py-2">₹{artist.fee}</td>
              <td className="px-4 py-2">
                <Button size="sm" variant="outline">
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
