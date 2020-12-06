import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './App';
import Form from './components/Form';
import FormSuccess from './components/FormSuccess'
import TextBlock from './components/TextBlock';

// components existance check
describe('App and other components existence check', () => {
  // let wrapper;
  //   beforeEach(()=>{
  //     wrapper = shallow(<App />);
  // });

  // snapshot test
  it('should render the <App /> Component correctly', () => {  
    const wrapper = mount(<App />); 
    expect(wrapper).toMatchSnapshot();
  });

  // render the App componnet without crashing
  it('should render the App componnet without crashing', ()=>{
    shallow(<App />);
  });
  // render the Form componnet without crashing
  it('should render the Form componnet without crashing', ()=>{
    shallow(<Form />);
  });
      // render the TextBlock componnet without crashing
  it('should render the TextBlock componnet without crashing', ()=>{
    shallow(<TextBlock as="h1" text="Test text" />);
  });

  it('should render the FormSuccess componnet without crashing', ()=>{
    shallow(<FormSuccess />);
  });
});
