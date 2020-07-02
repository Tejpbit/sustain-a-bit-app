import React, { useState } from "react";
import { View } from "react-native";
import { Space } from "./components/Space";
import { HeaderText } from "./shared_styled";
import { PressableText } from "./components/PressableText";

export const LoginScreen: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  if (authenticated) {
    console.log("Rendering auth");

    return <View style={{ width: "100%", height: "100%" }}>{children}</View>;
  }

  return (
    <View
      style={{
        alignItems: "center",
        height: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 2 }} />
        <HeaderText
          style={{
            flex: 1,
          }}
        >
          Sustain A Bit
        </HeaderText>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <PressableText
          text="Sign in with Google"
          onPress={() => {
            setAuthenticated(true);
          }}
        />
        <Space />
        <PressableText
          text="Sign in with Facebook"
          onPress={() => {
            setAuthenticated(true);
          }}
        />
      </View>
    </View>
  );
};
