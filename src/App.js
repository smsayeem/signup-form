import React, { useState } from 'react';
import Form from './components/Form';
import FormSuccess from './components/FormSuccess';
import './App.css';
import styled from 'styled-components';

function App() {

    const [info, setInfo] = useState({
      email:'',
      password:'',
      color:'',
      animal:[],
      tigertype:''
    })
    const [submit, setSubmit] = useState(false);

    const handleChange = (e) => {


    }
  
    // No functionality added for the submit button.
    const handleSubmit = (e) => {
      console.log('state success=',info);
      setSubmit(true);
    }

  return (
    <StyledApp>
      {!submit ? 
        (<Form 
          handleChange={handleChange}
          handleSubmit={handleSubmit} 
          info={info}
        />)
      : 
        (<FormSuccess />)
      }
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: var(--mainGrey);
  min-height: 100vh;
`;

export default App;
