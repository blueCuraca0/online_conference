import { useState } from "react"
import { supabase } from "lib/supabase";
import profileApi from "api/profileApi";

export const useSignUpController = () => {
  const [loading, setLoading] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const [otpSent, setOtpSent] = useState(false)
  const [signUpSuccess, setSignUpSuccess] = useState(false)
  const [pendingEmail, setPendingEmail] = useState('')
  const [pendingName, setPendingName] = useState('')

  const handleSignUp = async (email: string, password: string, firstName: string, lastName: string) => {
    setLoading(true)
    setAuthError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: firstName, last_name: lastName },
      },
    })

    if (error) {
      setAuthError(error.message)
    } else {
      setPendingEmail(email)
      setPendingName(`${firstName} ${lastName}`)
      setOtpSent(true)
    }
    setLoading(false)
  }

  const handleVerifyOtp = async (token: string) => {
    setLoading(true)
    setAuthError(null)

    const { error } = await supabase.auth.verifyOtp({
      email: pendingEmail,
      token,
      type: 'signup',
    })

    if (error) {
      setAuthError(error.message)
    } else {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        try {
          await profileApi.createUser({ id: user.id, email: pendingEmail, name: pendingName })
        } catch (err) {
          console.error("Error creating user profile:", err)
        }
      }
      setSignUpSuccess(true)
    }
    setLoading(false)
  }

  return {
    loading,
    authError,
    otpSent,
    signUpSuccess,
    pendingEmail,
    handleSignUp,
    handleVerifyOtp,
  }
}
