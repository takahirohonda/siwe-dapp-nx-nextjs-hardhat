import { revalidatePath } from 'next/cache'
import { updateUser } from '../../../../../drizzle/useOperations'

type UpdateUserProfileFormData = {
  id: string
  playerName: string
  description?: string
}
export const updateUserProfile = async (formData: FormData) => {
  const content = formData.get('content')
  if (content) {
    await updateUser(
      formData.get('content') as Partial<UpdateUserProfileFormData>
    )
    revalidatePath('/arena')
  }
}
