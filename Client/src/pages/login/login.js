import React from 'react';

import './login-style.css';
import LoginHeader from './login-header';
import LoginContent from './login-content';
import LoginFooter from './login-footer';

class LoginPage extends React.Component {
	render() {
		return (
			<div>
				<LoginHeader />
				<LoginContent />
				<LoginFooter />
			</div>
		);
	}
}

export default LoginPage;
