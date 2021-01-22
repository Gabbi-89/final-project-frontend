import React from 'react';

import styled from 'styled-components/macro';

import { themes } from 'styling/themes';

export const ActionButton = props => {
  return (
    <Button
      type={props.action}
      onClick={props.function}
    >
      {props.title}
    </Button>
  );
};

const Button = styled.button`
  cursor: pointer;
  border-radius: 8px;
  padding: 6px 4px;
  width: 130px;
  margin-top: 10px;
  align-self: center;
  font-family: 'Roboto', sans-serif;
  color: ${themes.color.dark};

  :hover {
    background: grey;
  }
`;