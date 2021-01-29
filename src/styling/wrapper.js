import styled from 'styled-components/macro';

import { theme } from './theme';

export const Wrapper = styled.section`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: none;
  background: ${theme.color.white};

  @media (min-width: 1023px) {
    width: 350px; 
  }
`;