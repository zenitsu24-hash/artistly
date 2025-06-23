import { z } from 'zod'

export const FormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  category: z.string().array().min(1, "Select at least one category"),
  location: z.string().min(1, 'Location is required'),
  fee: z.string().min(1, 'Fee range is required'),
})

export type FormData = z.infer<typeof FormSchema>
