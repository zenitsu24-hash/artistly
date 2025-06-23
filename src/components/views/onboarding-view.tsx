'use client'

import OnboardingForm from '@/components/onboarding/onboarding'
import { motion } from 'framer-motion'

export default function OnboardingView() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Artist Onboarding</h2>
      <OnboardingForm />
    </motion.main>
  )
}
