import React from 'react';
import './App.css';
import List from './Components/List';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Link to='/List' className='nav-link'>List</Link>
		  <Switch>
        <Route path="/list" component={List}/>			
      </Switch>
		</Router>
	);
}

export default App;