import React from 'react'
 
import {Route,Router, Redirect, Switch } from 'react-router-dom'
 

 

 
// IMPORTA O ARQUIVO DAS HISTORY 
import {history} from './History'

import Credito from '../components/typesPay/Credito'

import Debito from '../components/typesPay/Debito'

import Dashboard from '../components/typesPay/Dashboard'

import CicloPagamento from '../components/typesPay/AddCicloPagamento'

import NotFound from '../components/typesPay/NotFound'

import Content from '../components/ContentMain'
 
// hashRouter ou Router
let Rotas = () => {
   return (
       <div>
  <Router history={history}>
  <Switch>
      <Route path="/cicloPagamento" exact component={CicloPagamento}></Route>
      <Route path="/crédito" exact component={Credito}></Route>
      <Route path="/" exact component={Content}></Route>
      <Route path="/notfound" exact component={NotFound}></Route>
      <Route path="/dashboards" exact component={Dashboard}></Route>
      <Route path="/débito" exact component={Debito}></Route>
      
      <Redirect from="*" to="/"></Redirect>
      </Switch>
  </Router>
       </div>
   )
}
export default Rotas