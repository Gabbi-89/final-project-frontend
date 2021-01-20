import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components/macro';

export const Header = () => {

  return (
    <HeaderWrapper>
      <NavBar>
        <NavLink to='/' exact className="nav-link">
          Veckoplan
      </NavLink>
        <NavLink to='/recept' exact className="nav-link">
          Alla recept
      </NavLink>
      </NavBar>
      <HeaderText>Veckoplanering - måltider</HeaderText>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  text-align: center;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const HeaderText = styled.h1`
  font-size: 30px;
`;