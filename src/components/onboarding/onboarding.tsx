'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, FormData } from '@/lib/artist-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Card, CardContent, CardHeader, CardTitle
} from '@/components/ui/card'

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker']

export default function OnboardingForm() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [allArtists, setAllArtists] = useState<FormData[]>([])
  const [showForm, setShowForm] = useState(true)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      category: [],
    },
  })

  const handleCategoryChange = (cat: string) => {
    const updated = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat]

    setSelectedCategories(updated)
    setValue('category', updated, { shouldValidate: true })
  }

  const onSubmit = (data: FormData) => {
    setAllArtists((prev) => [...prev, data])
    setShowForm(false)
  }

  const handleNewEntry = () => {
    reset()
    setSelectedCategories([])
    setShowForm(true)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
      {showForm ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Artist Onboarding</h2>

          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register('name')} placeholder="Your name" />
            {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" {...register('bio')} placeholder="Tell us about yourself" />
            {errors.bio && <p className="text-sm text-red-600">{errors.bio.message}</p>}
          </div>

          <div>
            <Label>Category</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {categories.map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <Checkbox
                    id={cat}
                    checked={selectedCategories.includes(cat)}
                    onCheckedChange={() => handleCategoryChange(cat)}
                  />
                  <label htmlFor={cat} className="text-sm">{cat}</label>
                </div>
              ))}
            </div>
            {errors.category && <p className="text-sm text-red-600">{errors.category.message}</p>}
          </div>

          <div>
            <Label>Fee Range</Label>
            <Select onValueChange={(val) => setValue('fee', val, { shouldValidate: true })}>
              <SelectTrigger>
                <SelectValue placeholder="Select Fee Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5000-10000">₹5,000 – ₹10,000</SelectItem>
                <SelectItem value="10000-20000">₹10,000 – ₹20,000</SelectItem>
                <SelectItem value="20000-50000">₹20,000 – ₹50,000</SelectItem>
              </SelectContent>
            </Select>
            {errors.fee && <p className="text-sm text-red-600">{errors.fee.message}</p>}
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" {...register('location')} placeholder="City / State" />
            {errors.location && <p className="text-sm text-red-600">{errors.location.message}</p>}
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
            Submit
          </Button>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-green-700 text-xl font-semibold">Artist submitted successfully!</p>
          <Button onClick={handleNewEntry} className="mt-4 bg-gray-800 hover:bg-gray-900 text-white">
            Add Another Artist
          </Button>
        </div>
      )}

      {allArtists.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-4">All Submitted Artists</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {allArtists.map((artist, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <CardTitle>{artist.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm text-muted-foreground">
                  <p><strong>Bio:</strong> {artist.bio}</p>
                  <p><strong>Categories:</strong> {artist.category.join(', ')}</p>
                  <p><strong>Location:</strong> {artist.location}</p>
                  <p><strong>Fee:</strong> {artist.fee}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
