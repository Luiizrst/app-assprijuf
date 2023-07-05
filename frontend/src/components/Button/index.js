import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

function Button(props) {
  return (
    <RectButton
      style={props.primary ? styles.buttonPrimary : styles.buttonSecondary}
      {...props}
    >
      {props.icon && (
        <Ionicons
          name={props.icon}
          size={24}
          color={props.primary ? "#fff" : "#505AFC"}
        />
      )}
      <Text
        style={
          props.primary ? styles.textButtonPrimary : styles.textButtonSecondary
        }
      >
        {props.label}
      </Text>
    </RectButton>
  );
}

export default Button;
