import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./Button.styles";

const Button = ({ text, callback, style }) => (
  <Wrapper type="button" onClick={callback} style={style}>
    {text}
  </Wrapper>
);

Button.prototypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};
export default Button;
