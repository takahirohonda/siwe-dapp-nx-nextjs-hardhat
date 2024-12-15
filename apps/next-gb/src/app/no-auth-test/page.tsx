'use client'

import { useEffect, useState } from 'react'
export const NoAuthTestPage = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch('/api/auth-guard-demo')
        const user = await res.json()
        console.log(`checking the respose: ${user}`)
        setUser(user)
      } catch (error) {
        alert(error)
        console.error(error)
      }
    }
    getUser()
  }, [])

  return (
    <div>
      <h1>Response from the API path guarded by auth logic.</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  )
}

export default NoAuthTestPage
