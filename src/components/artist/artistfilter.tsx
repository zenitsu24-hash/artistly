'use client'

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

interface Props {
  filters: {
    category: string
    location: string
    price: string
  }
  onChange: (filters: Props['filters']) => void
}

export default function ArtistFilters({ filters, onChange }: Props) {
  const handleChange = (key: keyof typeof filters, value: string) => {
    onChange({ ...filters, [key]: value })
  }

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <Select value={filters.category} onValueChange={(val) => handleChange('category', val)}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Singer">Singer</SelectItem>
          <SelectItem value="Dancer">Dancer</SelectItem>
          <SelectItem value="Speaker">Speaker</SelectItem>
          <SelectItem value="DJ">DJ</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filters.location} onValueChange={(val) => handleChange('location', val)}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Delhi">Delhi</SelectItem>
          <SelectItem value="Mumbai">Mumbai</SelectItem>
          <SelectItem value="Bangalore">Bangalore</SelectItem>
          <SelectItem value="Goa">Goa</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filters.price} onValueChange={(val) => handleChange('price', val)}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="low">Below ₹15,000</SelectItem>
          <SelectItem value="mid">₹15,000 - ₹25,000</SelectItem>
          <SelectItem value="high">Above ₹25,000</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
