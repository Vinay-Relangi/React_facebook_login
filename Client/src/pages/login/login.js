import React from 'react';

import './login-style.css';
import LoginHeader from './login-header';
import LoginContent from './login-content';
import LoginFooter from './login-footer';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
	}

	handleUserParent = (value) => {
		this.props.handleUserRoot(value);
		if (value) {
			this.props.history.push('/home');
		}
	};

	render() {
		return (
			<div>
				<LoginHeader handleUserParent={(e) => this.handleUserParent(e)} />
				<LoginContent />
				<LoginFooter />
			</div>
		);
	}
}

export default LoginPage;
