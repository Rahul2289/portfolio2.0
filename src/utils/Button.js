import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <Btn
      href={`${props.link}`}
      target="_blank"
      color={props.color}
      bgcolor={props.bgcolor}
      size={props.size}
    >
      {props.children}
    </Btn>
  );
};

export default Button;

const Btn = styled.a`
  width: ${(props) => props.size}rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    background: transparent;
    outline: 2px solid ${(props) => props.bgcolor};
    color: ${(props) => props.bgcolor};
  }
`;
