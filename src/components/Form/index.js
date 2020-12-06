import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validateInfo from './components/FormValidation/validateInfo';
import styled, {css} from 'styled-components';
import TextBlock from '../TextBlock';

function Form({handleChange, info, handleSubmit} ) {
  const [err, setErr] = useState({})

  const validateFormData = (e) => {
    e.preventDefault();
    const myErr = validateInfo(info);
    setErr(myErr);

    if(Object.keys(myErr).length === 0){
      handleSubmit(e);
    }
  }

  return (
    <FormContainer>
      <form onSubmit={validateFormData}>
        <TextBlock as='h1' text='Fill out this awesome form' />
        <FormCenter>
          <TextBlock as='h2' text='Your details' />
          <FormGroup error={err.email}>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <InputWrapper>
              <StyledInput 
                type="email" 
                id="email"
                name='email'
                placeholder="Enter your email address"
                value={info.email}
                className="input-box"
                onChange={handleChange}  />
              {err.email && <TextBlock as='p' text={err.email} />}
            </InputWrapper>
          </FormGroup>
          <FormGroup error={err.password}>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <InputWrapper>
              <StyledInput 
                type="password" 
                id="password"
                name='password'
                placeholder="Choose your password"
                value={info.password}
                className="input-box"
                onChange={handleChange}  />
              {err.password && <TextBlock as='p' text={err.password} />}
            </InputWrapper>
          </FormGroup>
          <Divider />
          <TextBlock as='h2' text='Your animal' />
          <FormGroup error={err.color}>
            <StyledLabel htmlFor="color">color</StyledLabel>
            <InputWrapper>
              <StyledSelect name="color" id="color" className="input-box" onChange={handleChange}>
                <option value="">Choose your color</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="brown">Brown</option>
              </StyledSelect>
              {err.color && <TextBlock as='p' text={err.color} />}
            </InputWrapper>
          </FormGroup>
          <FormGroup error={err.animal}>
            <StyledLabel>Animal</StyledLabel>
            <CheckboxWrapper>
              <div>
                <StyledCheckbox 
                  type='checkbox'
                  name='animal'
                  value='Bear'
                  className='chkbox-input'
                  onChange={handleChange} />
                <CheckboxLabel>Bear</CheckboxLabel>
              </div>
              <div>
                <StyledCheckbox 
                  type='checkbox'
                  name='animal'
                  value='tiger'
                  className='chkbox-input'
                  onChange={handleChange} />
                <CheckboxLabel>Tiger</CheckboxLabel>
              </div>
              <div>
                <StyledCheckbox 
                  type='checkbox'
                  name='animal'
                  value='Snake'
                  className='chkbox-input'
                  onChange={handleChange} />
                <CheckboxLabel>Snake</CheckboxLabel>
              </div>
              <div>
                <StyledCheckbox 
                  type='checkbox'
                  name='animal'
                  value='Donkey'
                  className='chkbox-input'
                  onChange={handleChange} />
                <CheckboxLabel>Donkey</CheckboxLabel>
              </div>
              {err.animal && <TextBlock as='p' text={err.animal} />}
            </CheckboxWrapper>
          </FormGroup>
          <FormGroup error={err.tigertype}>
            {info.animal.map(item => item === 'tiger' ?
            <React.Fragment key={item}>
              <StyledLabel htmlFor="tigertype">Tiger type</StyledLabel>
              <InputWrapper>
                <StyledInput 
                  type="text"
                  id='tigertype'
                  name="tigertype"
                  placeholder="Enater tiger type"
                  className="input-box"
                  value={info.tigertype}
                  onChange={handleChange}
                />
                {err.tigertype && <TextBlock as='p' text={err.tigertype} />}
              </InputWrapper>
            </React.Fragment>
            : 
            null
            )}
            </FormGroup>
          <Divider />
          <ButtonWrapper>
            <StyledButton type="submit" name="submit">Create account</StyledButton>
          </ButtonWrapper>
        </FormCenter>
      </form>
    </FormContainer>
  )
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem 1rem;
    background-color: var(--mainWhite);
    max-width: 640px;
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: 769px){
      padding: 3rem;
    }
  `;

const FormCenter = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const StyledLabel = styled.label`
  width: 25%;
  color: var(--primaryGrey);
  text-transform: capitalize;
  font-size: 1.1rem;

  @media screen and (min-width: 769px){
    width: 30%;
    }
`;

const InputWrapper = styled.div`
  width: 75%;

  @media screen and (min-width: 769px){
    width: 70%;
    }
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid var(--primaryLight);
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  padding: 10px;
  color: var(--mainBlack);
  letter-spacing: 1px;

  &[type='text']:focus,
  &[type='email']:focus,
  &[type='password']:focus{
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
  }
  &::placeholder{
    color: var(--primaryLight);
    font-size: .9rem;
  }
`;

const StyledSelect = styled.select`
  -webkit-appearance: none;
  width: 100%;
  border: 1px solid var(--primaryLight);
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  padding: 10px;
  color: var(--mainBlack);
  letter-spacing: 1px;

`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CheckboxItem = styled.div`

`;

const StyledCheckbox = styled.input`
  margin: 0 8px;
`;
const CheckboxLabel = styled.label`
  padding: 10px 0;
  color: var(--primaryGrey);
`;
const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  ${props => props.error && css`
    & input{
      color:  var(--error);
      background-color: var(--errorLight);
    }
    &, & > label{
      color:  var(--error);
    }
  `}
`;
const ButtonWrapper = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 769px){
    margin: 1rem 0 0 0;
    }
`;

const StyledButton = styled.button`
  width: 48%;
  height: 2.7rem;
  text-decoration: none;
  color: var(--mainWhite);
  background-color: var(--primary);
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 1rem;
  outline: 0;
  border: none;
  border-radius: 4px;
  padding: 0 1rem;
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover, &:active{
    background-color: var(--primaryDark);
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3); 
  }

  @media screen and (min-width: 769px){
    font-size: 1.1rem;
    }
`;

const Divider = styled.div`
  border-bottom: 1px solid var(--mainGrey);
  margin: 1rem 0;
`;

Form.propTypes = {
  handleChange: PropTypes.func, 
  handleSubmit: PropTypes.func, 
  info: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    color: PropTypes.string,
    animal: PropTypes.array,
    tigertype:PropTypes.string
  }),
};

Form.defaultProps = {
  handleChange: ()=>{}, 
  handleSubmit: ()=>{}, 
  info: {
    email: '',
    password: '',
    color: '',
    animal: [],
    tigertype:''
  }
};

export default Form
