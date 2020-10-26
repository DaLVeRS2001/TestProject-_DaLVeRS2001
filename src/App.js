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
    <div className='App-wrapper'>
      <Header />
      <Nav state={props.state.navPage} />
      <div className='App-wrapper-content'>
        <Route path='/dialogs'
               render={ () => <Dialogs state={props.state.messagePage} /> }/>

        <Route path='/profile'
               render={ () => <Profile
                 profilePage={props.state.profilePage}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}
               /> }/>
      </div>
    </div>
  )
}

export default App;
