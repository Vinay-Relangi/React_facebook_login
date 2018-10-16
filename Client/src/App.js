import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import LoginPage from './pages/login/login';
import HomePage from './pages/home/home';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn : false
		};
	}

	handleUserRoot = (value) => {
		this.setState({ isLoggedIn: value });
	};

	render() {
		return (
			<Router>
				<div>
					<PropsRoute exact path="/" component={LoginPage} handleUserRoot={(e) => this.handleUserRoot(e)} />
					<Route
						path="/home"
						render={() => (this.state.isLoggedIn ? <Route component={HomePage} /> : <Redirect to="/" />)}
					/>
				</div>
			</Router>
		);
	}
}

const PropsRoute = ({ component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(routeProps) => {
				return renderMergedProps(component, routeProps, rest);
			}}
		/>
	);
};

const renderMergedProps = (component, ...rest) => {
	const finalProps = Object.assign({}, ...rest);
	return React.createElement(component, finalProps);
};

export default App;
