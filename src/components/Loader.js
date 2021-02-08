import React from 'react';
import { Circular } from 'styled-loaders-react';

import styled from 'styled-components/macro';
import { theme } from 'styling/theme';

export const Loader = () => {
  return (
    <LoaderWrapper>
        <p>Loading recipe data...</p>
     <Circular color='#393A41' size='80px' />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;