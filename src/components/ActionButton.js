import React from 'react';

import styled from 'styled-components/macro';

import { theme } from 'styling/theme';

export const ActionButton = (props) => {
  return (
    <Button
      type={props.action}
      onClick={props.function}>
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
  font-family: ${theme.fonts.mainfont};
  color: ${theme.color.dark};

  :hover {
    background: grey;
  }
`;