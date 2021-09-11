import React from 'react';
import styled from 'styled-components';

export function AdditionalInfoBlock({ info, onClick }) {

  const {
    firstName, lastName, adress: { streetAddress, city, state, zip }, description
  } = info;

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Container onClick={onClick}>
      <Wrapper onClick={handleClick}>
        <h3>Profile info</h3>
        <div>Selected profile: {firstName
          + " " + lastName}</div>
        <div>Description: {description}</div>
        <div>Address: {streetAddress}</div>
        <div>City: {city} </div>
        <div>State: {state} </div>
        <div>Index: {zip} </div>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
overflow: auto;
display:flex;
justify-content:center;
align-items:center;`

const Wrapper = styled.div`
width: 17em;
min-height:15em;
padding: 10px 20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
font-size: 20px;
background: white`;