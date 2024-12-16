import { z } from 'zod'

export const UserProfileUpdateFormSchema = z.object({
  playerName: z
    .string()
    .min(1, { message: 'Player name is required' })
    .min(3, { message: 'Player name has to be more than 3 characters' })
    .max(20, { message: 'Player name has to be less than 20 characters' }),
  bio: z.string(),
})

export type UserProfileUpdateFormValue = z.infer<
  typeof UserProfileUpdateFormSchema
>
