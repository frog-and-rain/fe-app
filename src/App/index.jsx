import React from 'react';
import Accounts from './Accounts';
import Admin from './Admin';
import Home from './Home';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = () => (
  <Router>
		<div>
			<Home />
			<div>
				<Route exact path="/home" component={Home} />
				<Route path="/accounts" component={Accounts} />
				<Route path="/admin" component={Admin} />
			</div>
		</div>
  </Router>
);

export default App;