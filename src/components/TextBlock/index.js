import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function TextBlock({as, text}) {
  switch (as) {
    case 'h1':
      return <H1>{text}</H1>
    case 'h2':
      return <H2>{text}</H2>
    case 'p':
    default:
      return <P>{text}</P>
  }
}

const H1 = styled.h1`
  letter-spacing: 0.8px;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 769px){
    letter-spacing: 1px;
    font-size: 2rem;
    margin-bottom: 2.5rem;
    }
`;
const H2 = styled.h2`
  letter-spacing: 0.8px;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 769px){
    letter-spacing: 1px;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    }
`;
const P = styled.p``;

TextBlock.propTypes = {
  as: PropTypes.string, 
  text: PropTypes.string.isRequired
};

TextBlock.defaultProps = {
  as: 'p'
};

export default TextBlock
