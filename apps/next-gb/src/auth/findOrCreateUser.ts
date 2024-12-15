import { createUser, getUserByAddress } from '../drizzle/useOperations'

const getUserId = async (address: string) => {
  const user = await getUserByAddress(address)

  if (user.length > 0) {
    return user[0].id
  }
}

export const findOrCreateUserAndGetId = async (address: string) => {
  try {
    const user = await getUserByAddress(address)

    if (user.length > 0) {
      console.log(`We have an existing user: ${JSON.stringify(user)}`)
      return user[0].id
    }

    if (user.length === 0) {
      const newUser = {
        ethereumAddress: address,
      }
      const outcome = await createUser(newUser)
      console.log(`User created successfully: ${JSON.stringify(outcome)}`)
      const userId = await getUserId(address)
      console.log(`userId from newly created user: ${userId}`)
      return userId
    }
  } catch (error) {
    console.error('Error finding or creating user', error)
  }
}
