import React from 'react';

import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>This website is made by Gabriella Bolin as Final Project @Technigo's Bootcamp 20/21</FooterText>
      <FooterText>See more at <a href='http://gabriellabolin.se/'>www.gabriellabolin.se</a></FooterText>
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