import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./Apps/screens/WelcomeScreen/WelcomeScreen";

export default function App() {
  return <View style={styles.container}>{<WelcomeScreen />}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
