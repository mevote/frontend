import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import poll from '../../asset/image/poll.png';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-contnent: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 60px;
  font-size: 24px;
  text-align: left;

  p {
    margin-top: 10px;
    font-size: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 40px;
  border-top: solid 1px;

  border-bottom: solid 1px;

  justify-content: space-between;
  align-items: center;

  h1 {
  }

  p {
    color: #595758;
  }
`;

const Bottom = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
`;

function Poll({ ps_name, addr, place_name, isPre }) {
  if (isPre) {
    return (
      <Row>
        <Column>
          <h2>{place_name}</h2>
          <p>{ps_name}</p>
          <p>{addr}</p>
        </Column>
        <img src={poll} width="150" alt="poll" />
      </Row>
    );
  }
  return (
    <Row>
      <Column>
        <h2>{place_name}</h2>
        <p>{ps_name}표소</p>
        <p>{addr}</p>
      </Column>
      <img src={poll} width="150" alt="poll" />
    </Row>
  );
}

function Polls({ prePolls, mainPolls }) {
  return (
    <Container>
      <Bottom>
        {prePolls && // 여기서 null 인지 체크합니다.
          prePolls.map((prePolls) => {
            return (
              <Poll
                key={prePolls.NUM}
                ps_name={prePolls.EV_PS_NAME}
                addr={prePolls.ADDR}
                place_name={prePolls.PLACE_NAME}
                isPre={true}
              />
            );
          })}
        {mainPolls && // 여기서 null 인지 체크합니다.
          mainPolls.map((mainPolls) => {
            return (
              <Poll
                key={mainPolls.NUM}
                ps_name={mainPolls.PS_NAME}
                addr={mainPolls.ADDR}
                place_name={mainPolls.PLACE_NAME}
                isPre={false}
              />
            );
          })}
      </Bottom>
    </Container>
  );
}

export default Polls;

Poll.propTypes = {
  ps_name: PropTypes.string,
  addr: PropTypes.string,
  place_name: PropTypes.string,
  isPre: PropTypes.bool,
};

Polls.propTypes = {
  prePolls: PropTypes.array,
  mainPolls: PropTypes.array,
};
