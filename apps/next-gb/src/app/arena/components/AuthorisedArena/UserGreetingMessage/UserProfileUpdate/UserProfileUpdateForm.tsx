import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  UserProfileUpdateFormSchema,
  UserProfileUpdateFormValue,
} from './UserProfileUpdateForm.types'
import { Button, Input, Textarea } from '@nextui-org/react'
import { useCallback } from 'react'

export const UserProfileUpdateForm = ({
  closeModal,
}: {
  closeModal: () => void
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfileUpdateFormValue>({
    mode: 'all',
    resolver: zodResolver(UserProfileUpdateFormSchema),
  })

  const onSubmit: SubmitHandler<UserProfileUpdateFormValue> = useCallback(
    async (data: UserProfileUpdateFormValue) => {
      try {
        const response = await fetch('/api/user-profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (response.ok) {
          console.log('Profile updated successfully!')
          closeModal()
          // small hack for now...
          window.location.reload()
        } else {
          const error = await response.json()
          console.log(`Failed to update profile: ${error.message}`)
        }
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    },
    [closeModal]
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[16px]"
    >
      <Input
        label="Player Name"
        isInvalid={Boolean(errors.playerName)}
        errorMessage={errors.playerName?.message}
        {...register('playerName')}
      />
      <Textarea
        label="Bio"
        isInvalid={Boolean(errors.bio)}
        errorMessage={errors.bio?.message}
        placeholder="Enter your description"
        {...register('bio')}
      />
      <Button color="primary" type="submit">
        Update
      </Button>
    </form>
  )
}
