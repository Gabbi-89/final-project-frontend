import React from 'react';

import styled from 'styled-components/macro';

export const NotFound = () => {
  return <StatusMessage>Not found...</StatusMessage>
}

const StatusMessage = styled.p`
  font-size: 60px;
  color: pink;
`;