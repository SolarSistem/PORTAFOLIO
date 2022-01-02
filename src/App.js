import Index from 'pagues';
import Proyectos from 'pagues/proyectos';
import 'App.css';
import { Component } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (

    <div className="App">
     <Router>
					<Switch>
						<Route path="/Proyectos.jsx">
								<Proyectos/>
						</Route>
							<Route path="/">
								<Index/>
						</Route>
				</Switch>
					</Router>



    </div>
  );
}

export default App;
