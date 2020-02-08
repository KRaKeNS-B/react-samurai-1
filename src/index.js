import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
  { id: '1', name: 'Dimych' },
  { id: '2', name: 'Andrey' },
  { id: '3', name: 'Mary' },
  { id: '4', name: 'Sveta' },
  { id: '5', name: 'Vova' },
]
let messagesData = [
  { id: '1', message: 'Hi' },
  { id: '2', message: 'How are you?' },
  { id: '3', message: 'Yo' },
  { id: '4', message: 'Yo' },
  { id: '5', message: 'Yo' },
]
let postsData = [
  { id: '1', message: `Hi, how are you?`, likesCount: '11' },
  { id: '2', message: `It's my first post`, likesCount: '23' },
]

ReactDOM.render(<App dialogs={ dialogsData } messages={ messagesData } posts={ postsData } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
