import { useContext } from "react";
import { ActivityIndicator, View } from "react-native"
import { BackdropContext } from "../../../contexts";
import { AppBackdrop } from "../../atoms/atm.backdrop/app-backdrop.atm.styled";

interface AppCustomBackdropProps {}

export const AppCustomBackdrop = (props: AppCustomBackdropProps) => {
  const { visible } = useContext(BackdropContext);
  const renderActivityIndicator = () => (
    <AppBackdrop
      justifyCon
      alignIt
      containerHeight={100}
      containerWidth={100}
      bgColor={'#000'}
    >
      <ActivityIndicator
        size={60}
        color={'#FFF'}
      ></ActivityIndicator>
    </AppBackdrop>
  );

  return(
      visible
        ? renderActivityIndicator()
        : null
  );
}