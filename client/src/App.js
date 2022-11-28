import React, {Component} from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'

    
import "bootstrap/dist/css/bootstrap.css"
import "./css/App.css"

import Home from './components/Home.js'

import About from './components/About.js'


import Add from "./components/Add"

import Modify from "./components/Modify"
import Delete from "./components/Delete"
import DisplayAttractions from "./components/DisplayAttractions"

export default class App extends Component 
{
    render() 
    {
        return (

            <BrowserRouter>
                   
              <Switch>
                <Route exact path="/" component={DisplayAttractions}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/Add" component={Add}/>
                <Route exact path="/Delete/:id" component={Delete}/>
                <Route exact path="/Modify/:id" component={Modify}/>
               <Route exact path="/DisplayAttractions" component={DisplayAttractions}/>
              <Route path="*" component={DisplayAttractions}/>
              </Switch>
                  </BrowserRouter>
        )
    }
}
