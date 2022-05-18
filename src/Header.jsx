import React from 'react';
import styled from '@emotion/styled';
import check from './asset/image/check.png';
import menu from './asset/image/menu.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vh;
  padding: 24px;

  max-width: 1020px;
  position: sticky;
  top: 0;
  background-color: #595758;
  font-size: 24px;
  font-weight: bold;
  z-index: 1;

  img {
    margin-left: 5px;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const Menu = styled.div``;
const Blank = styled.div``;

function Header() {
  return (
    <Container>
      <Blank />
      <Location>
        대치 1동 <img src={check} width="20" height="20" alt="button" />
      </Location>
      <Menu>
        <img src={menu} width="20" height="20" alt="button" />
      </Menu>
    </Container>
  );
}

export default Header;
