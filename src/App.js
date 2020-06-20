import React, {Component} from 'react';

import { Home, Error, Indian } from './components';

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component{
	render(){
		return(
          <BrowserRouter>
          <Switch>
             <Route path="/" component= { Home } exact />
             <Route path="/indian" component= { Indian } exact />
             <Route component= { Error } />
          </Switch>
          </BrowserRouter>


			);
	}
}

export default App;