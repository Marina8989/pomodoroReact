import React from 'react';
import Header from './Header';
import './index.css';
import Break from './Break';
import Session from './Session';

function App() {
    return (
        <div className="container">
            <Header />
            <div className="time">
              <Break />
              <Session />
            </div>  
        </div>
    )
}

export default App