import React from 'react';
import styled from '@emotion/styled';
import check from '../asset/image/check.png';
import menu from '../asset/image/menu.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6rem;
  position: sticky;
  top: 0;
  background-color: #595758;
  font-size: 28px;
  font-weight: bold;
  z-index: 1;

  img {
    margin-left: 10px;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const Menu = styled.div`
  img {
    margin-right: 30px;
  }
`;
const Blank = styled.div``;

function Header() {
  return (
    <Container>
      <Blank />
      <Location>
        창천동 <img src={check} width="24" height="24" alt="button" />
      </Location>
      <Menu>
        <img src={menu} width="24" height="24" alt="button" />
      </Menu>
    </Container>
  );
}

export default Header;
