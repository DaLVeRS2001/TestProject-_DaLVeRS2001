import React, {Component} from 'react';
import './App.css';

// Components
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import store from "./Redux/State";





const App = (props) => {

  return (
    <div className='App-wrapper'>
      <Header />
      <Nav state={props.state.navPage} />
      <div className='App-wrapper-content'>
        <Route path='/dialogs'
               render={ () => <Dialogs
                 messagePage={props.state.messagePage}
                 dispatch={props.dispatch}
               />}
        />

        <Route path='/profile'
               render={ () => <Profile
                 profilePage={props.state.profilePage}
                 dispatch={props.dispatch}
               /> }
        />

      </div>
    </div>
  )
}


export default App;
