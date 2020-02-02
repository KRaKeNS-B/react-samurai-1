import React from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://s1.logaster.com/static/v3/img/products/logo.png" alt="Лого"/>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt=""/>
        </div>
        <div>
          <img src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg" alt=""/>
          description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
