import React from "react";
import { User, UserContext } from ".";



function UserProvider({ children }: any) {
  return (
    <UserContext.Provider value={{
      name: '',
      avatar_url: ''
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;