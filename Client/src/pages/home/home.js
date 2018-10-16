import React from 'react';

const padding20 = {
	margin : '60px 20px'
};

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error    : null,
			isLoaded : false,
			person   : []
		};
	}

	componentDidMount() {
		this.UserList();
	}

	UserList() {
		fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded : true,
					person   : result
				});
			},
			(error) => {
				this.setState({
					isLoaded : true,
					error
				});
			}
		);

		// fetch('https://mywebsite.com/endpoint/', {
		// 	method  : 'POST',
		// 	headers : {
		// 		Accept       : 'application/json',
		// 		'Content-Type' : 'application/json'
		// 	},
		// 	body    : JSON.stringify({
		// 		firstParam  : 'yourValue',
		// 		secondParam : 'yourOtherValue'
		// 	})
		// });
	}

	render() {
		const { error, isLoaded, person } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		}
		else if (!isLoaded) {
			return <div>Loading...</div>;
		}
		else {
			const persons = this.state.person.map((item, i) => (
				<div key={item.id} style={padding20}>
					<h4>{item.title}</h4>
					<span>{item.body}</span>
				</div>
			));

			return (
				<div id="layout-content" className="layout-content-wrapper">
					<div className="panel-list">{persons}</div>
				</div>
			);
		}
	}
}

export default HomePage;
