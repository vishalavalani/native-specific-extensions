import React from "react";
import { TouchableOpacity, Text } from "react-native";

class Button extends React.Component {
  componentDidMount() {
    alert("Button native");
  }
  render() {
    return (
      <TouchableOpacity>
        <Text>I am a native button</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
