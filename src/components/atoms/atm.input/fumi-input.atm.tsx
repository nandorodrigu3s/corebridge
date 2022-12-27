import React from "react";
import { Alert } from "react-native";
import { Fumi } from "react-native-textinput-effects";



interface FumiInputProps {
  inputIcon: string;
  inputLabel: string;
  inputIconEditable: boolean;
  inputIconClass: React.ComponentClass<any,any>
  inputValue?:string;
  inputIconSize?: number;
  inputIconColor?: string;
  inputPercentWidth?: string;
  inputActiveColor?: string;
}


export const FumiInput = (props: FumiInputProps) => {
  return (
    <Fumi
      style={{
        width: `${props.inputPercentWidth ?? '85'}%`, 
        borderWidth: 1, 
        borderColor: '#fbcd50',
        borderRadius: 16,
        backgroundColor: '#f5ebc6',
        marginBottom: 8
      }}
      editable={props.inputIconEditable}
      label={props.inputLabel}
      value={props.inputValue}
      iconClass={props.inputIconClass}
      iconName={props.inputIcon}
      iconSize={props.inputIconSize ?? 25}
      iconColor={props.inputActiveColor ?? '#000'}
    />
  )
}