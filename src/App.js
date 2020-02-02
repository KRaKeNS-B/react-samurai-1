import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      Simple HTML
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href='#'>Home</a>
      <a href='#'>News Feed</a>
      <a href='#'>Messages</a>
    </div>
  )
}

export default App;
