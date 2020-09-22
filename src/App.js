import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './1.pages/Home/Home';
import NavbarPage from './2.component/Navbar/NavbarPage';
import Paket from './1.pages/Home/Paket';
import CardPaketUsahaCafe from "./2.component/Card/CardPaketUsahaCafe";

export default class App extends Component {
  render(){
  return (
    <div className="App">
      
      <NavbarPage/>
      <Switch>
          <Route  path='/' component={Home} exact/>
          <Route  path='/paket' component={Paket} exact/>
          <Route  path='/cafe' component={CardPaketUsahaCafe} exact/>
      </Switch>
    </div>
  );
}
}
