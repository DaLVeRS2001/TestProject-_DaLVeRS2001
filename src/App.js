import React, {Component} from 'react';
import './App.css';

// Components
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header/>
        <Nav/>
        <div className="App-wrapper-content">
          <Route path="/profile" render={()=> <Profile pD={props.pD}/>}/>
          <Route path="/dialogs" render={()=> <Dialogs dD={props.dD} mD={props.mD}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
};










export default App;

