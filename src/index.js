import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const dialogsData = [
  {id: 1, name: "Vlad"},
  {id: 2, name: "Katia"},
  {id: 3, name: "Egor"},
  {id: 4, name: "Maks"},
  {id: 5, name: "Alex"},
  {id: 6, name: "Valera"}
]


const messagesData = [
  {id: 1, message: "Hi"},
  {id: 2, message: "Hi, whats up"},
  {id: 3, message: "YO"},
  {id: 4, message: "Vlad"},
  {id: 5, message: "nice to see you again bro"},
]


const postsData = [
  {
    id: 1,
    message: "Hi buddy, How are u?",
    likeCount: 24,
    src: "https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg"
  },
  {
    id: 2,
    message: "it's my first post",
    likeCount: 12,
    src: "https://im0-tub-ru.yandex.net/i?id=e11274ee0fbeaccac0618cce6beeebac&n=13&exp=1"
  }
  // {id: 3, message: "YO", likeCount: 5, src: ''},
  // {id: 4, message: "i'm here", likeCount: 4, src: ''},
  // {id: 5, message: "nice to see you again bro", likeCount: 55, src: ''},
]



ReactDOM.render(
  <React.StrictMode>
    <App dD={dialogsData} mD={messagesData} pD={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



//data
