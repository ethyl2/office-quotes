import React, { useState } from 'react';

const Episode = ({ item }) => {
    const [visible, setVisible] = useState(false);
    
    const handleClick = () => {
        setVisible(!visible);
    }
    return (
        <div key={item.episode}>
            <button onClick={handleClick}>Episode #{item.episode}: {item.name}</button>
            {visible && item.quotes.map((quote, index) => <p key={index}>{quote}</p>)}
        </div>)
}

export default Episode;