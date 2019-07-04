import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import AppStyles from "../config/theme";

const StyledButton = styled(TouchableOpacity)`
  background-color: ${AppStyles.color.BUTTON};
  border-color: #0b64eb;
  border-radius: none;
  text-align: center;
  border: 1px solid transparent;
  padding: 5px;
  line-height: 1.5;
  border-radius: 0;
`;
const StyledText = styled(Text)`
  color: #fff;
`;
class Button extends React.Component {
  render() {
    const { title, onClick } = this.props;

    return (
      <StyledButton onPress={onClick}>
        <StyledText>{title}</StyledText>
      </StyledButton>
    );
  }
}

export default Button;
