import React from 'react';

class HelloMessage extends React.Component {
	render() {
		return (
			<div>
				<p>Hello, {this.props.name}!</p>
				<p>You are a {this.props.sex} that is {this.props.age}</p>
			</div>
		)
	}
}

export default HelloMessage;