import React, { useState } from "react";
import { User, UserContext } from ".";
import { NFTData, UserAuthData } from "../system/interfaces/common.interfaces";



function UserProvider({ children }: any) {
  const [user, setUser] = useState<User>({
    token: '',
    name: '',
    avatar_url: '',
    isLogged: false,
    nfts: [],
  });

  const addUserData = (userData: UserAuthData, successCallback?: () => void): void => {
    setUser({
      token: userData.token || '',
      name: `${userData.user.firstName} ${userData.user.lastName}` || '',
      avatar_url: '',
      isLogged: Boolean(userData.token),
      nfts: userData.user.wallet as NFTData[],
    });
    successCallback && successCallback();
  }

  const cleanUserData = (successCallback?: () => void): void => {
    setUser({
      token: '',
      name: '',
      avatar_url: '',
      isLogged: false,
      nfts: [],
    });
    successCallback && successCallback();
  }

  return (
    <UserContext.Provider value={{...user, addUserData, cleanUserData}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;