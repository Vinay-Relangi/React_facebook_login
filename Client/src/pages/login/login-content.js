import React from 'react';

class LoginContent extends React.Component {
	render() {
		return (
			<article className="container">
				<div className="row">
					<div className="col-sm-8">
						<div className="login-main">
							<h4>
								<i className="fa fa-dashboard" /> Gorgeous color and design
							</h4>
							<span>Some sample description text about the template goes here</span>

							<h4>
								{' '}
								<i className="fa fa-money" /> 100% fully responsive{' '}
							</h4>
							<span>Another description text about the template goes here</span>

							<h4>
								<i className="fa fa-mobile-phone" /> Competible with all browers and mobile devices
							</h4>
							<span>Yet another sample description text can be placed in one line</span>

							<h4>
								<i className="fa fa-trophy" /> Easy to use and custmize with mobile friendly and
								responsive
							</h4>
							<span>Your last description text about your startup or business</span>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="">
							<h3>
								<i className="fa fa-shield" /> Register now
							</h3>
							<hr />
							<div className="form-group">
								<label className="control-label">Email Address</label>
								<input type="text" className="form-control" placeholder="Email Address" />
							</div>

							<div className="form-group">
								<label className="control-label">Password</label>
								<input type="text" className="form-control" placeholder="Password" />
							</div>

							<div className="form-group">
								<label className="control-label">Repeat Password</label>
								<input type="text" className="form-control" placeholder="Repeat Password" />
							</div>

							<div className="">
								<label>Birthday</label>
								<div className="form-group flexDisplay">
									<div className="col-sm-4 multibox">
										<select className="form-control">
											<option>Day</option>
										</select>
									</div>
									<div className="col-sm-4 multibox">
										<select className="form-control">
											<option>Month</option>
										</select>
									</div>
									<div className="col-sm-4 multibox">
										<select className="form-control">
											<option>Year</option>
										</select>
									</div>
								</div>
							</div>

							<small>
								By clicking Sign Up, you agree to our Terms and that you have read our Data Use Policy,
								including our Cookie Use.
							</small>
							<div className="height85" />
							<div className="form-group">
								<label className="control-label" />
								<input type="submit" className="btn btn-success" />
							</div>
						</div>
					</div>
				</div>
			</article>
		);
	}
}

export default LoginContent;
