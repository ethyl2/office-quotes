import React, { useState } from 'react';

import Header from './components/Header';

import './App.css';

function App() {
  const [message, setMessage] = useState('');
  
  const fakeApiCall = () => Promise.resolve('Success!');

  const onClickHandler = () => {
    fakeApiCall().then(res => setMessage(res));
  }

  return (
    <div className="App">
      <Header />
      <div>
        <span>{message}</span>
        <button onClick={onClickHandler}>Get Message!</button>
      </div>
    </div>
  );
}

export default App;
