import React from "react";
import { ImageBackground, Image, StyleSheet, View } from "react-native";

import AppText from "../../components/AppText/AppText";
import AppButton from "../../components/AppButton/AppButton";
import styles from "./styles";

function WelcomeScreen() {
  const loginHandler = () => console.log("login");
  const signUpHandler = () => console.log("signUp");

  return (
    <ImageBackground
      blurRadius={2.25}
      resizeMode="cover"
      source={require("../../../assets/arina.jpg")}
      style={styles.background}
    >
      <View style={styles.conatiner}>
        <Image
          style={styles.logo}
          source={require("../../../assets/favicon.png")}
        />
        <AppText>make your right connection</AppText>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton
          title="sign up"
          backgroundColor="red"
          color="white"
          onPress={signUpHandler}
        />

        <AppButton
          title="login"
          backgroundColor="skyblue"
          color="black"
          onPress={loginHandler}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
