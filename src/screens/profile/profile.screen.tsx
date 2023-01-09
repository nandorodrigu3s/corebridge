import React, { useContext } from "react";
import { NotLoggedInComponent } from "../../components/organ/organ.not-logged-in/not-logged-in.organ";
import { ProfileComponent } from "../../components/organ/organ.profile/profile.organ";
import { UserContext } from "../../contexts";

interface ProfileProps {}

const Profile = ({ navigation: { navigate } }) => {
  const user = useContext(UserContext);
  const onPressWallet = () => {
    navigate("WalletDetails", { nfts: user?.nfts || [] });
  }

  return ( user.isLogged 
    ? <ProfileComponent countNFT={user.nfts?.length || 0} onPressWallet={onPressWallet}/> 
    : <NotLoggedInComponent />
  )
};


export default Profile;