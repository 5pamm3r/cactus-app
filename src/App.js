import React from 'react'

import './App.css';

function App() {
  return (
      <React.Fragment>
        <header />
        <div className='search__container'>
          <input type='text' placeholder='Search...' />
        </div>
        <nav className='nav__container'>
          <ul>
            <li>All</li>
            <li>Indoor</li>
            <li>Outdoor</li>
            <li>Favorite</li>
          </ul>
        </nav>
      </React.Fragment>
      
  );
}

export default App;
