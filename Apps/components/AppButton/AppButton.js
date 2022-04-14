import React from "react";
import { Text, TouchableOpacity } from "react-native";

import AppText from "../AppText/AppText";
import styles from "./styles";

function AppButton(props) {
  return (
    <TouchableOpacity
      style={[
        styles.buttons,
        { backgroundColor: props.backgroundColor, color: props.color },
      ]}
      onPress={props.onPress}
    >
      <AppText>{props.title}</AppText>
    </TouchableOpacity>
  );
}

export default AppButton;
