import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components/macro';

import { themes } from 'styling/themes';

export const Header = () => {

  return (
    <NavBar>
      <NavLink to='/' exact className="nav-link">
        VECKOPLAN
      </NavLink>
      <HeaderText>Veckoplanering!</HeaderText>
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
  background: ${themes.color.dark};
  color: ${themes.color.light};
  padding: 20px 0;
  top: 0;
  margin: 0;
  font-size: 13px;
  width: 100%;
`;

const HeaderText = styled.h1`
  font-size: 15px;
  font-weight: normal;
`;