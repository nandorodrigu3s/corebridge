import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { NavHighlightButton } from '../../atoms/atm.navigation-button/navigation-highlight-button.atm.styled';
import { NavHighlightContainer } from "../../atoms/atm.containers/navigation-highlight-conteiner.atm";
import { NavHighlightTextButton } from "../../atoms/atm.navigation-button/navigation-highlight-text-button.atm.styled";

interface NavHighlightButtonComponentProps {
  label: string;
  onPress?: () => void;
  routeName?: string;
  params?: any;
  color?: string;
  hidePadding?: boolean;
}

export const NavHighlightButtonComponent = (props: NavHighlightButtonComponentProps) => {
  const navigation = useNavigation();
  const { label, onPress, routeName, params, color, hidePadding } = props;

  const navigateTo = (route?: string, param?: any) => {
    navigation.navigate({ name: route, param } as never);
  }

  return (
    <NavHighlightContainer hasPadding={!hidePadding}>
      <NavHighlightButton
        onPress={onPress ? onPress : () => navigateTo(routeName, params)}
        color={color}
      >
        <NavHighlightTextButton color={color}>{label}</NavHighlightTextButton>
      </NavHighlightButton>
    </NavHighlightContainer>
  )
}