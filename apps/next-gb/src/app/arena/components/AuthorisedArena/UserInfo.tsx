import { useEffect, useState } from 'react'

export const UserInfo = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch('/api/user-info')
        const user = await res.json()
        console.log(`checking user: ${user}`)
        setUser(user)
      } catch (error) {
        console.error(error)
      }
    }
    getUser()
  }, [])

  return (
    <div>
      <h1>User Info</h1>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  )
}
