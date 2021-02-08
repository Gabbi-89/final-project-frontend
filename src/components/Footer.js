import React from 'react';

import styled from 'styled-components';
import { theme } from 'styling/theme';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        This website is made by Gabriella Bolin as Final Project @Technigo's Bootcamp 20/21
      </FooterText>
      <FooterText>See more at <FooterLink href='http://gabriellabolin.se/'>www.gabriellabolin.se</FooterLink></FooterText>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  align-content: flex-end;
  bottom: 0;
  margin-top: 40px;
`;

const FooterText = styled.p`
  font-size: 12px;
  margin: 0;
`;

const FooterLink = styled.a`
  color: ${theme.colors.dark};

  :visited {
    color: ${theme.colors.dark};
  }

  :active {
    color: ${theme.colors.dark};
  }
`;

// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>