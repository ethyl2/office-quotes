import React, { useContext } from 'react';
import { QuotesContext } from '../App';
import Episode from './Episode';

const Quotes = () => {
    const quotes = useContext(QuotesContext);
    return (
        <div>
            <h1>Quotes from The Office</h1>
            {quotes.map(item => <Episode item={item} key={item.episode} />)}
        </div>    
    )
}

export default Quotes;