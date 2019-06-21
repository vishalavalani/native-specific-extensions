import React from "react";
import { TouchableOpacity, Text } from "react-native";
// import styled from "styled-components/native";
// import AppStyles from "../config/theme";

// const StyledButton = styled(TouchableOpacity)`
//   background-color: ${AppStyles.color.BUTTON};
//   border-color: #0b64eb;
//   color: #fff;
//   border-radius: none;
//   text-align: center;
//   vertical-align: middle;
//   border: 1px solid transparent;
//   padding: 0.2rem 0.5rem;
//   font-size: 1rem;
//   line-height: 1.5;
//   border-radius: 0;
//   outline: none;
//   cursor: pointer;
//   &:hover {
//     background-color: #4685e4;
//   }
// `;

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <Text>I am a react native button</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
