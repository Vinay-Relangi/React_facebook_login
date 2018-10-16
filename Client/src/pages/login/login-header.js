import React from 'react';
import { Redirect } from 'react-router';

class LoginHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			password : ' ',
			email    : ' '
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const form = {
			password : this.state.password.trim(),
			email    : this.state.email.trim()
		};
		if (!form.password || !form.email) {
			return;
		}
		this.setState({
			password : '',
			email    : '',
			toHome   : true
		});
		this.props.handleUserParent(true);
	};

	render() {
		return (
			<header>
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="logo">FACEBOOK</div>
						</div>
						<div className="col-sm-6 hidden-xs">
							<div className="row">
								<div className="col-sm-5">
									<div className="form-group">
										<input
											type="text"
											className="form-control no-border"
											placeholder="Email or Phone"
											name="email"
											value={this.state.email}
											onChange={(e) => this.handleChange(e)}
										/>
										<div className="login-bottom-text checkbox hidden-sm">
											<label>
												<input type="checkbox" />
												Keep me sign in
											</label>
										</div>
									</div>
								</div>
								<div className="col-sm-5">
									<div className="form-group">
										<input
											type="text"
											className="form-control no-border"
											placeholder="Password"
											name="password"
											value={this.state.password}
											onChange={(e) => this.handleChange(e)}
										/>
										<div className="login-bottom-text hidden-sm"> Forgot your password? </div>
									</div>
								</div>
								<div className="col-sm-2">
									<div className="form-group">
										<input
											type="button"
											value="login"
											className="btn btn-primary btn-header-login"
											onClick={(e) => this.onSubmit(e)}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default LoginHeader;
