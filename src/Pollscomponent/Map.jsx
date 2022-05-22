import React from 'react';
import styled from '@emotion/styled';
import mapexample from '../asset/image/mapexample.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-contnent: space-between;
`;

const Mapimage = styled.div``;

function Map() {
    return (
        <Container>
            <Mapimage>
                <img src={mapexample} alt="Polls Map" width="1020px"/>
            </Mapimage>
        </Container>
    );
}

export default Map;