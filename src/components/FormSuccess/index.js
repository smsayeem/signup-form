import React from 'react';
import styled from 'styled-components';

export default function FormSuccess() {
  return (
    <StyledContainer>
      <h1>We have received your request!</h1>
      <StyledButton href='/'>Go back</StyledButton>
    </StyledContainer>
  )
}

const StyledButton = styled.a`
  text-decoration: none;
  border: 1px solid var(--primaryGrey);
  color: var(--primaryDark);
  display: block;
  border-radius: 4px;
  margin: 2em;
  text-align: center;

  &:hover {
    cursor: pointer;
    color: var(--primary);
    background-color: var(--mainGrey);
  }
`;

const StyledContainer = styled.div`
  font-size: 2rem;
  color: var(--primaryDark);
  margin: 0 auto;
`;
