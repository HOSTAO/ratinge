import { useState, useEffect, useCallback } from "react"
import { account } from "./appwrite"
import { Models, ID } from "appwrite"

export type User = Models.User<Models.Preferences>

export async function signUp(email: string, password: string, name: string) {
  const user = await account.create(ID.unique(), email, password, name)
  await account.createEmailPasswordSession(email, password)
  return user
}

export async function signIn(email: string, password: string) {
  return account.createEmailPasswordSession(email, password)
}

export async function signOut() {
  return account.deleteSession("current")
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    return await account.get()
  } catch {
    return null
  }
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const checkSession = useCallback(async () => {
    setLoading(true)
    const u = await getCurrentUser()
    setUser(u)
    setLoading(false)
  }, [])

  useEffect(() => {
    checkSession()
  }, [checkSession])

  return { user, loading, refresh: checkSession }
}
