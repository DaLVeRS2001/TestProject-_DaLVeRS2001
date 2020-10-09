import React, {Component} from 'react';
import './App.css';

// Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";





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
