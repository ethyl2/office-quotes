import React, { useState } from 'react';

const Episode = ({ item }) => {
    const [visible, setVisible] = useState(false);
    
    const handleClick = () => {
        setVisible(!visible);
    }
    return (
        <div key={item.episode}>
            <button onClick={handleClick}>Episode #{item.episode}: {item.name}</button>
            {visible && <div>{item.quotes.map(quote => { 
                return (
                    <div className='itemBox'>{quote.map((line, index) => {
                    return (
                        <p key={index}>{line}</p> 
                    )
                })}</div>)
            })
            }
            </div>}
        </div>)
}

export default Episode;