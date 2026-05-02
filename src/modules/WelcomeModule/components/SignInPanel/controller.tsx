import { useEffect, useState } from "react"
import { User } from '@supabase/supabase-js'

import { supabase } from "lib/supabase";
import { useProfileStore } from "stores/profileStore";

export const useSignInController = () => {
  const { setProfile } = useProfileStore();
  
  const [loading, setLoading] = useState(false)
  const [claims, setClaims] = useState<User | null>(null)
  const [authError, setAuthError] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setClaims(user)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setProfile({
        userId: session?.user.id ?? "",
        displayName: "",
        pronouns: "",
        role: "",
        timezone: "",
        bio: "",
        email: "",
        avatarUrl: "",
        createdAt: "",
      })
      setClaims(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true)
    setAuthError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setAuthError(error.message)
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setClaims(null)
  }

  return {
    loading,
    claims,
    authError,
    handleSignIn,
    handleLogout,
  }
}
