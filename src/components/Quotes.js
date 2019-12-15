import React, { useContext } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

import { QuotesContext } from '../App';
import Episode from './Episode';

const Quotes = () => {
    const [season, quotes, isLoading] = useContext(QuotesContext);
    return (
        <div>
           <h3>Season {season}</h3>
            {isLoading && <Loader
                type="Grid"
                color="#18BAEC"
                height={100}
                width={100}
            />}
            {!isLoading && quotes.map(item => <Episode item={item} key={item.episode} />)}
        </div>    
    )
}

export default Quotes;