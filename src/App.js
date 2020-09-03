import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import api from './api';
import Vazio from './Pages/Prontuario-vazio/Prontuario-vazio.jsx';
import Cadastro from './Pages/Cadastro/Cadastro.jsx';
import Preenchido from './Pages/Prontuario-preenchido/Prontuario-preenchido.jsx';


function App() {
  return (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Vazio} />
        <Route path="/Cadastro" component={Cadastro} />
        <Route path="/Preenchido" component={Preenchido} />
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
