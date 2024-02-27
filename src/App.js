import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  component() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>  
        <Route exact path="/business"><News key="business" pageSize={5} country="in" category="Business" /></Route>
        <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="Entertainment" /></Route>
        <Route exact path="/general"><News key="general" pageSize={5} country="in" category="General"  /></Route>
        <Route exact path="/health"><News key="health" pageSize={5} country="in" category="Health" /></Route>
        <Route exact path="/science"><News key="science" pageSize={5} country="in" category="Science"  /></Route>
        <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="Sports" /></Route>
        <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="Technology" /></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}