import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/Home';
import Footer from './components/layout/Footer';

class App extends Component {
	render () {
		return (
			<Router>
				<Header />
				<Route path="/" component={Home} />
				<Footer />
			</Router>
		);
	}
}

export default App;
