import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Quotes from './components/Quotes';
import Footer from './components/Footer';

import './App.css';
import bestboss from './images/bestboss.jpg';
import { quickQuotes } from './quickQuotes';


export const QuotesContext = createContext();

function App() {
  const [quotes, setQuotes] = useState([]);
  const [season, setSeason] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState('');
  const [seasonInput, setSeasonInput] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://cors-anywhere.herokuapp.com/https://the-office-api.herokuapp.com/season/${season}/format/quotes`)
    .then(res => {console.log(res);
      setQuotes(res.data.data);
      setIsLoading(false); 
      })
    .catch(err => {
      console.log(err);
      setIsLoading(false)});
  }, [season]);

  
  const fakeApiCall = () => {
    return Promise.resolve(quickQuotes[Math.floor(Math.random() * quickQuotes.length)]);
  }

  const onClickHandler = () => {
    fakeApiCall().then(res => setMessage(res));
  }

  const changeSeason = e => {
    setSeasonInput(e.target.value);
  }

  const submitForm = e => {
    e.preventDefault();
    setSeason(e.target['season-input'].value);
  }

  return (
    <div className="App">
      <Header />
      <div className='hero'>
        <div className='imgContainer'>
          <span>{message}</span>
          <button onClick={onClickHandler}>Quick Quote!</button>
        </div>
        <div className='imgContainer'>
          <img src={bestboss} alt='best boss mug' />
        </div>
      </div>
      <form onSubmit={submitForm}>
        <label htmlFor='season-input'>Choose a Season: </label>
        <input onChange={changeSeason} 
          value={seasonInput} 
          name='season-input' 
          type='number' 
          id='season-input'
          max='9' 
          min='1'
        />
        <button type='submit'>Submit</button>
      </form>

      <QuotesContext.Provider value={[season, quotes, isLoading]}>
        <Quotes />
      </QuotesContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
