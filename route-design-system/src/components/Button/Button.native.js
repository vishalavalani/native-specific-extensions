import React from "react";
import { TouchableOpacity, Text } from "react-native";

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