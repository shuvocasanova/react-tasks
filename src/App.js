import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SimpleCounter from './Tasks/SimpleCounter';
import TemperatureControlApp from './Tasks/TemperatureControlApp';
import SearchFilter from './Tasks/4th Task/SearchFilter';

function App() {
  return (
    <div >
      {/* // <SimpleCounter /> */}
      {/* <TemperatureControlApp /> */}
      <SearchFilter/>
    </div>
  );
}

export default App;
