import React, { useContext, useEffect } from "react";
import { NotLoggedInComponent } from "../../components/organ/organ.not-logged-in/not-logged-in.organ";
import { ProfileComponent } from "../../components/organ/organ.profile/profile.organ";
import { BackdropContext, UserContext } from "../../contexts";

interface ProfileProps {}

const Profile = ({ navigation: { navigate } }) => {
  const {nfts, cleanUserData, isLogged } = useContext(UserContext);
  const { setVisible } = useContext(BackdropContext);
  const onPressWallet = () => {
    navigate("WalletDetails", { nfts: nfts || [] });
  }
  
  return ( isLogged 
    ? <ProfileComponent
        countNFT={nfts?.length || 0}
        onPressWallet={onPressWallet}
        onLogout={() => {
          setVisible(true);
          setTimeout(() => {
            cleanUserData(() => setVisible(false));
          }, 3500);
        }}
      /> 
    : <NotLoggedInComponent />
  )
};


export default Profile;