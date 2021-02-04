import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Switch,Route} from "react-router-dom"


function App(){
    return(
            <div>
            <Navbar/>
            <Switch>
                <Route exact path="/"></Route>
            </Switch>
            </div>
    )
}

export default App