import React from "react";
import styled from "styled-components";
import AppStyles from "../config/theme";

const StyledButton = styled.button`
  background-color: ${AppStyles.color.BUTTON};
  border-color: #0b64eb;
  color: #fff;
  border-radius: none;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #4685e4;
  }
`;

class Button extends React.Component {
  render() {
    const { title, onClick } = this.props;
    return <StyledButton onClick={onClick}>{title}</StyledButton>;
  }
}

export default Button;
