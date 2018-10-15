import React from 'react';

class LoginHeader extends React.Component {
	render() {
		return (
			<header>
				<div class="container">
					<div class="row">
						<div class="col-sm-6">
							<div class="logo">FACEBOOK</div>
						</div>
						<div class="col-sm-6 hidden-xs">
							<div class="row">
								<div class="col-sm-5">
									<div class="form-group">
										<input
											type="text"
											class="form-control no-border"
											placeholder="Email or Phone"
										/>
										<div class="login-bottom-text checkbox hidden-sm">
											<label>
												<input type="checkbox" />
												Keep me sign in
											</label>
										</div>
									</div>
								</div>
								<div class="col-sm-5">
									<div class="form-group">
										<input type="text" class="form-control no-border" placeholder="Password" />
										<div class="login-bottom-text hidden-sm"> Forgot your password? </div>
									</div>
								</div>
								<div class="col-sm-2">
									<div class="form-group">
										<input type="button" value="login" class="btn btn-primary btn-header-login" />
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
