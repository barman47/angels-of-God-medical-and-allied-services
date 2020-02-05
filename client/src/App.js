import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import store from './store';

import ScrollToTop from './components/layout/ScrollToTop';
import Header from './components/layout/Header';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import About from './components/About';

import HospitalHomePage from './components/hospital/Home';
import Booking from './components/hospital/Booking';

import PrivateRoute from './components/common/PrivateRoute';
import AdminRoute from './components/common/AdminRoute';


import AdmissionHome from './components/admission/Home';
import Apply from './components/admission/Apply';
import StudentLogin from './components/admission/Login';
import StudentDashboard from './components/student/Dashboard';
import Bio from './components/student/Bio';
import Documents from './components/student/Documents';
import Profile from './components/student/StudentProfile';

import AdminLogin from './components/admin/Login';
import AdminDashboard from './components/admin/Dashboard';
import ViewPatient from './components/admin/ViewPatient';
import ViewStudent from './components/admin/ViewStudent';
import AdminProfile from './components/admin/Profile';
import Bookings from './components/admin/Bookings';

import setAuthToken from './utils/setAuthToken';
import { logoutStudent, setCurrentUser } from './actions/studentActions';
import { logoutAdmin, setCurrentAdmin } from './actions/adminActions';

if (localStorage.studentToken) {
	// set auth token to header auth
	setAuthToken(localStorage.studentToken);
	// Decode token and get user info
	const decoded = jwt_decode(localStorage.studentToken);
	// Set user and authenticated
	store.dispatch(setCurrentUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Logout out user
		store.dispatch(logoutStudent());
		window.location.href = '/';
	}
}

if (localStorage.adminToken) {
	// set auth token to header auth
	setAuthToken(localStorage.adminToken);
	// Decode token and get user info
	const decoded = jwt_decode(localStorage.adminToken);
	// Set user and authenticated
	store.dispatch(setCurrentAdmin(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Logout out user
		store.dispatch(logoutAdmin());
		window.location.href = '/';
	}
}


class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<Router>
					<ScrollToTop>
						<Header />
						<Route path="/" exact component={Home} />
						<Route path="/medical-center" exact component={HospitalHomePage} />
						<Route path="/admissions" exact component={AdmissionHome} />
						<Route path="/admissions/apply" exact component={Apply} />
						<Route path="/admissions/login" exact component={StudentLogin} />
						<Route path="/about" exact component={About} />
						<Route path="/patients/booking" exact component={Booking} />
						<Route path="/admin/login" exact component={AdminLogin} />
						<Switch>
							<PrivateRoute path="/admissions/students/:id" exact component={StudentDashboard} />
						</Switch>
						<Switch>
							<PrivateRoute path="/admissions/students/:id/bio" exact component={Bio} />
						</Switch>
						<Switch>
							<PrivateRoute path="/admissions/students/:id/documents" exact component={Documents} />
						</Switch>
						<Switch>
							<AdminRoute path="/admissions/students/:id/profile" exact component={Profile} />
						</Switch>
						<Switch>
							<AdminRoute path="/admin/students" exact component={AdminDashboard} />
						</Switch>
						<Switch>
							<AdminRoute path="/admin/students/:id" exact component={ViewStudent} />
						</Switch>
						<Switch>
							<AdminRoute path="/admin/profile" exact component={AdminProfile} />
						</Switch>
						<Switch>
							<AdminRoute path="/admin/booking" exact component={Bookings} />
						</Switch>
						<Switch>
							<AdminRoute path="/admin/patients/:id" exact component={ViewPatient} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</Router>
			</Provider>
		);
	}
}

export default App;
