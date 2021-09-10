import React, { useCallback } from 'react';
import styled from 'styled-components';

export function Input({ onChangeText, value, placeholder}) {
    const onChange = useCallback((event) => {
      onChangeText(event.target.value);
    }, [onChangeText]);
    return <StyledInput placeholder={placeholder} onChange={onChange} value={value} />;
  }

const StyledInput = styled.input`
width: 40em;
height: 30px;
margin-bottom: 20px;
border: 1px solid #B3E5FC;
background: #E1F5FE;
outline: none;
color: black;
`;