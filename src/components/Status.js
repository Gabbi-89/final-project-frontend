import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components/macro';

export const Status = () => {
  const errorMessage = useSelector((store) => store.meals.week.errorMessage);

  return (
    <>
      {errorMessage && (
        <StatusWrapper>
          <p>{`${errorMessage}`}</p>
        </StatusWrapper>
      )}
      {console.log(errorMessage)}
    </>
  );
};

const StatusWrapper = styled.div`
  font-size: 60px;
`;
