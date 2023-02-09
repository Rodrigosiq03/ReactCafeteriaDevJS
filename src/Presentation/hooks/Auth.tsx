import { createContext, useContext, useEffect, useState } from "react";

import { Auth } from "aws-amplify";


const AuthContext = createContext({
  auth: false,
  setAuth: (auth: boolean) => {},
  user: null,
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState(null)

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setAuth(true)
      setUser(user)
    } catch (error) {
      setAuth(false)
      setUser(null)
    }
  }

  useEffect(() => {
    checkUser()
    
  }, [auth])

  return (
    <AuthContext.Provider value={{ auth, user, setAuth }}>
      {children}
    </AuthContext.Provider>
  )



}

export default AuthContext



