import React from 'react';

import styled from 'styled-components/macro';

import { Container } from 'styling/GlobalStyles';

export const StartPage = () => {
  return (
    <Container>
      <RandomizerButton>Sätt veckans måltider!</RandomizerButton>
      {/* Randomize function to be added */}
      <WeekWrapper>
        <Weekdays>
          <StandardText>Måndag:</StandardText>
          <StandardText>Tisdag:</StandardText>
          <StandardText>Onsdag:</StandardText>
          <StandardText>Torsdag:</StandardText>
        </Weekdays>
        <BuyingList>
          <StandardText>Att inhandla för veckan:</StandardText>
        </BuyingList>
      </WeekWrapper>
    </Container>
  );
};


const WeekWrapper = styled.div`
@media (min-width: 1023px) {
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin-top: 40px;
}
`;

const RandomizerButton = styled.button`
  cursor: pointer;
  align-self: center;
  border-radius: 8px;
  border: none;
  padding: 12px;
  font-size: 22px;
  width: 250px;
`;

const Weekdays = styled.div``;

const BuyingList = styled.div`
  margin-top: 60px;
`;

const StandardText = styled.h4``;