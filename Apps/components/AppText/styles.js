import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      color: "white",
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 20,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default styles;
