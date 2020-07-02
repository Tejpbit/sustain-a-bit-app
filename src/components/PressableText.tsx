import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface Props {
  text: string;
  onPress: () => void;
}

export const PressableText: React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledPressableText>{text}</StyledPressableText>
    </TouchableOpacity>
  );
};

const StyledPressableText = styled.Text`
  color: #32c50d;
  font-size: 18px;
`;
