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
  border: 2px solid ${theme.fonts.dark};
  padding: 10px 8px;
  width: 135px;
  margin-top: 10px;
  align-self: center;
  font-family: ${theme.fonts.mainfont};
  color: ${theme.colors.dark};
  font-size: 16px;
  font-weight: bold;

  :hover {
    background: ${theme.colors.light};
  }
`;