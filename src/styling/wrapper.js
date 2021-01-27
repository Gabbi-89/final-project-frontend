import styled from 'styled-components/macro';

import { themes } from './themes';

export const Wrapper = styled.section`
  padding: 15px 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: none;
  background: ${themes.color.white};

  @media (min-width: 1023px) {
    width: 450px;   
  }
`;