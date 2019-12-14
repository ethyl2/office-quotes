import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                Experimenting with tests.
                </h1>
                <h2>Including snapshot testing, using react-test-renderer</h2>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        )
    }
}

export default Header;