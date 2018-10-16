import React from 'react';

class LoginFooter extends React.Component {
	render() {
		return (
			<footer className="container">
				<hr />
				<div className="footer-options">
					<ul>
						<li>
							<a href="#">Mobile</a>
						</li>
						<li>
							<a href="#">Find Friends</a>
						</li>
						<li>
							<a href="#">Badges</a>
						</li>
						<li>
							<a href="#">People</a>
						</li>
						<li>
							<a href="#">Pages</a>
						</li>
						<li>
							<a href="#">Places</a>
						</li>
						<li>
							<a href="#">Games</a>
						</li>
						<li>
							<a href="#">Locations</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
					</ul>
				</div>
				<small className="copyrights"> © Copyrights reserved 2018</small>
			</footer>
		);
	}
}

export default LoginFooter;
