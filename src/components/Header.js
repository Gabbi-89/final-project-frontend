import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components/macro';

import { theme } from 'styling/theme';

export const Header = () => {
  return (
    <NavBar>
      <NavLink to='/' exact className="nav-link">
        VECKOPLAN
      </NavLink>
      <HeaderText>Veckoplanering</HeaderText>
      <NavLink to='/recept' exact className="nav-link">
        ALLA RECEPT
      </NavLink>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${theme.colors.dark};
  color: ${theme.colors.light};
  padding: 20px 0;
  top: 0;
  margin: 0;
  font-size: 13px;
  width: 100%;
`;

const HeaderText = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.white};
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (min-width: 767px) {
    font-size: 24px;
  }
`;