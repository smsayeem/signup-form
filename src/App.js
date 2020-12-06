import React, { useState } from 'react';
import Form from './components/Form';
import { Helmet } from 'react-helmet';
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
      const {name, value} = e.target;
      if(e.target.type === 'checkbox'){

        if(e.target.checked){
          setInfo({...info, [name]:[...info.animal, value]});
        }else{
          if(value === 'tiger'){
            info.tigertype = '';
          }
          const newAnimal = info.animal.filter(item=> item !== value);
          setInfo({...info, [name]:newAnimal});
        }

      }else{
        setInfo({ ...info, [name]:value });
      }

    }
  
    // No functionality added for the submit button.
    const handleSubmit = (e) => {
      console.log('state success=',info);
      console.log('congratulation !!! Form submitted successfully.');
      setSubmit(true);
    }

  return (
    <StyledApp>
      <Helmet>
        <title>Milkchoc form</title>
        <meta name = "description" content = "Milkchoc form app is a demo form, for SEO purpose" />
      </Helmet>
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
