import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },

  conatiner: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: 70,
    left: 40,
  },

  buttonsContainer: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    padding: 20,
  },

  logo: {
    alignSelf: "center",
  },

  login: {
    flex: 0.075,
    width: "100%",
    backgroundColor: "#409FF3",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
