import React from 'react'

import { Auth } from 'aws-amplify'

export const useLogout = () => {
  const [isLoading, setIsLoading] = React.useState(false)

  const logout = async () => {
    setIsLoading(true)
    await Auth.signOut()
    setIsLoading(false)
  }

  return { logout, isLoading }
}

