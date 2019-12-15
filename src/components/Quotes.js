import React, { useContext } from 'react';
import { QuotesContext } from '../App';
import Episode from './Episode';

const Quotes = () => {
    const [season, quotes] = useContext(QuotesContext);
    return (
        <div>
           <h3>Season {season}</h3>
            {quotes.map(item => <Episode item={item} key={item.episode} />)}
        </div>    
    )
}

export default Quotes;