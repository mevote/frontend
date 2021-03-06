import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

function Button() {
  return <StyledButton>버튼</StyledButton>;
}

export default Button;
