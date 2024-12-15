import { revalidatePath } from 'next/cache'
import { updateUser } from '../../../../../../drizzle/useOperations'
import { upsertUserProfile } from '../../../../../../drizzle/userProfileOperations'
import { getAuthenticatedUserId } from '../../../../../../auth/auth.utils'

type UpdateUserProfileFormData = {
  playerName: string
  description?: string
}
export const updateUserProfile = async (formData: FormData) => {
  const name = formData.get('playerName')
  const userId = await getAuthenticatedUserId()
  if (name && userId) {
    await updateUser({
      id: userId,
      playerName: name as string,
    })
    await upsertUserProfile({
      userId: userId,
      bio: formData.get('bio') as string,
    })
    revalidatePath('/arena')
  }
}
