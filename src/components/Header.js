import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Quotes from The Office</h1>  
            </header>
        )
    }
}

export default Header;