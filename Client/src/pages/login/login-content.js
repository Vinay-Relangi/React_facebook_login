import React from 'react';

class LoginContent extends React.Component {
	render() {
		return (
			<article class="container">
				<div class="row">
					<div class="col-sm-8">
						<div class="login-main">
							<h4>
								<i class="fa fa-dashboard" /> Gorgeous color and design
							</h4>
							<span>Some sample description text about the template goes here</span>

							<h4>
								{' '}
								<i class="fa fa-money" /> 100% fully responsive{' '}
							</h4>
							<span>Another description text about the template goes here</span>

							<h4>
								<i class="fa fa-mobile-phone" /> Competible with all browers and mobile devices
							</h4>
							<span>Yet another sample description text can be placed in one line</span>

							<h4>
								<i class="fa fa-trophy" /> Easy to use and custmize with mobile friendly and responsive
							</h4>
							<span>Your last description text about your startup or business</span>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="">
							<h3>
								<i class="fa fa-shield" /> Register now
							</h3>
							<hr />
							<div class="form-group">
								<label class="control-label" for="">
									Email Address
								</label>
								<input type="text" class="form-control" placeholder="Email Address" />
							</div>

							<div class="form-group">
								<label class="control-label" for="">
									Password
								</label>
								<input type="text" class="form-control" placeholder="Password" />
							</div>

							<div class="form-group">
								<label class="control-label" for="">
									Repeat Password
								</label>
								<input type="text" class="form-control" placeholder="Repeat Password" />
							</div>

							<div class="">
								<label>Birthday</label>
								<div class="form-group flexDisplay">
									<div class="col-sm-4 multibox">
										<select class="form-control">
											<option>Day</option>
										</select>
									</div>
									<div class="col-sm-4 multibox">
										<select class="form-control">
											<option>Month</option>
										</select>
									</div>
									<div class="col-sm-4 multibox">
										<select class="form-control">
											<option>Year</option>
										</select>
									</div>
								</div>
							</div>

							<small>
								By clicking Sign Up, you agree to our Terms and that you have read our Data Use Policy,
								including our Cookie Use.
							</small>
							<div class="height85" />
							<div class="form-group">
								<label class="control-label" for="" />
								<input type="submit" class="btn btn-success" />
							</div>
						</div>
					</div>
				</div>
			</article>
		);
	}
}

export default LoginContent;
