'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Music, Mic, PartyPopper, Drum } from 'lucide-react'
import Footer from './footer'

const categories = [
  {
    name: 'Singers',
    icon: Music,
    description: 'Find vocal artists for concerts, weddings, or parties.',
    href: '/artist?s=singing',
  },
  {
    name: 'Dancers',
    icon: Drum,
    description: 'Professional dancers for live events and shows.',
    href: '/artist?s=dance',
  },
  {
    name: 'Speakers',
    icon: Mic,
    description: 'Book keynote speakers and emcees for conferences.',
    href: '/artist?s=speaking',
  },
  {
    name: 'DJs',
    icon: PartyPopper,
    description: 'Top DJs to keep the party going all night long.',
    href: '/artist?s=dj',
  },
]
export default function HomePageView() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-100">

      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Discover and Book Top Artists for Any Occasion
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-600"
        >
          Artistly helps you find the perfect performer for your event — music, dance, comedy and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Link href="/artistlanding">
            <Button size="lg" className="text-white bg-indigo-600 hover:bg-indigo-700">
              Explore Artists
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {categories.map((category, i) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
              >
                <Link href={category.href}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer">
                    <CardHeader className="flex flex-col items-center gap-2">
                      <div className="bg-indigo-100 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-center text-lg">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 text-center">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </section>
      <Footer/>
    </div>
  )
}
