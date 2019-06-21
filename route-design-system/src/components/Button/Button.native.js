import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components";
// import AppStyles from "../config/theme";

const StyledButton = styled.TouchableOpacity`
  background-color: #0b64eb;
`;

class Button extends React.Component {
  render() {
    return (
      <StyledButton>
        <Text>I am a react native button</Text>
      </StyledButton>
    );
  }
}

export default Button;
