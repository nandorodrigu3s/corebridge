import React, { useContext } from "react";
import { NotLoggedInComponent } from "../../components/organ/organ.not-logged-in/not-logged-in.organ";
import { ProfileComponent } from "../../components/organ/organ.profile/profile.organ";
import { UserContext } from "../../contexts";

interface ProfileProps {}

const Profile = ({ navigation: { navigate } }) => {
  const userContext = useContext(UserContext);
  const onPressWallet = () => {
    navigate("WalletDetails", {});
  }

  return ( userContext.isLogged 
    ? <ProfileComponent countNFT={7} onPressWallet={onPressWallet}/> 
    : <NotLoggedInComponent />
  )
};


export default Profile;