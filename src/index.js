import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 
import { HashRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './componentes/home/Home';
import Game from './componentes/game/Game';
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route  path="/Home/:Game/:user/:category/:difficult"> 
        <Game/>
      </Route>
        
      <Route exact path="/" component={Home}/> 
    </Switch>
  </BrowserRouter>,
   document.getElementById('root')
);


reportWebVitals();
