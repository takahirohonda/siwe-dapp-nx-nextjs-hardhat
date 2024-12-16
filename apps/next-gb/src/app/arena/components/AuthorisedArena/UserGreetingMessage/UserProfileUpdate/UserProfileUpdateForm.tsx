import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import {
  UserProfileUpdateFormSchema,
  UserProfileUpdateFormValue,
} from './UserProfileUpdateForm.types'
import { Button, Input, Textarea } from '@nextui-org/react'

export const UpdateForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserProfileUpdateFormValue>({
    mode: 'all',
    resolver: zodResolver(UserProfileUpdateFormSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Player Name" {...register('playerName')} />
      <Textarea
        label="Bio"
        placeholder="Enter your description"
        {...register('bio')}
      />
      <Button color="primary" variant="light" type="button">
        Update
      </Button>
    </form>
  )
}
