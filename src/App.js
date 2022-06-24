import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SimpleCounter from './Tasks/SimpleCounter';
import TemperatureControlApp from './Tasks/3rd Task/TemperatureControlApp'
import SearchFilter from './Tasks/4th Task/SearchFilter';
import BasicRegistrationForm from './Tasks/5th Task/BasicRegistrationForm';

function App() {
  return (
    <div >
      {/* // <SimpleCounter /> */}
      {/* <TemperatureControlApp/> */}
      {/* <SearchFilter/> */}
      <BasicRegistrationForm/>
    </div>
  );
}

export default App;
