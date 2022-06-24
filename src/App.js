import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SimpleCounter from './Tasks/SimpleCounter';
import TemperatureControlApp from './Tasks/TemperatureControlApp';

function App() {
  return (
    <div >
      {/* // <SimpleCounter /> */}
      <TemperatureControlApp />
    </div>
  );
}

export default App;
