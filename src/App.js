import React, {Component} from 'react';
import './App.css';

// Components
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";





const App = () => {
  return (
    <div className="App-wrapper">
      <Header/>
      <Nav/>
      <Profile/>
    </div>
  );
};



export default App;
