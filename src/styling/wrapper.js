import styled from 'styled-components/macro';

import { themes } from './themes';

export const Wrapper = styled.section`
  padding: 15px 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  border: none;
  background: ${themes.color.white};
`;