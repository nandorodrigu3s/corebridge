import styled from "styled-components/native";


interface AppInputProps {
  border?: string;
  radiusValue?: number;
}

export const AppInput = styled.TextInput<AppInputProps>`
  border: 1px solid black;
  ${(props: AppInputProps) => props.radiusValue && `border-radius: ${props.radiusValue}px;`};
`;