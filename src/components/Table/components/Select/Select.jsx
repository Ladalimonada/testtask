import React from 'react';
import styled from 'styled-components';

export function Select({ setSelectedValue }) {

  const usStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT',
    'DE', 'DC', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS'];

  return (
    <>
      <SelectItem name="states" id="states" onChange={(e) => setSelectedValue(e)}>
        <option value="" default selected>Filter by state</option>
        {usStates.map((item) => <option id={item}>{item}</option>)}
      </SelectItem>
    </>
  )
}

const SelectItem = styled.select`
width: 10em;
height: 34px;
border: 1px solid #B3E5FC;
background: #E1F5FE;
outline: none;
  `;
