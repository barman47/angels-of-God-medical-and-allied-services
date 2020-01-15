import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScrollToTop from './components/layout/ScrollToTop';
import Header from './components/layout/Header';
import Home from './components/Home';
import Footer from './components/layout/Footer';

import HospitalHomePage from './components/hospital/Home';
import AdmissionHome from './components/admission/Home';

class App extends Component {
	render () {
		return (
			<Router>
				<ScrollToTop>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/medical-center" exact component={HospitalHomePage} />
					<Route path="/admissions" exact component={AdmissionHome} />
					<Footer />
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
