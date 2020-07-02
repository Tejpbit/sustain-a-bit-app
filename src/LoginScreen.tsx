import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Space } from "./components/Space";

export const LoginScreen: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  if (authenticated) {
    return <>{children}</>;
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
        <Text
          style={{
            flex: 1,
            fontSize: 36,
            fontWeight: "900",
          }}
        >
          Sustain A Bit
        </Text>
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

interface PressableTextProps {
  text: string;
  onPress: () => void;
}

const PressableText: React.FC<PressableTextProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledPressableText>{text}</StyledPressableText>
    </TouchableOpacity>
  );
};

const StyledPressableText = styled.Text`
  color: #32c50d;
  font-size: 18;
`;
