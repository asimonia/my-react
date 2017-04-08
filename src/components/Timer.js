import React from 'react';

class Timer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {secondsElapsed: 0,};
	}

	tick() {
		this.setState((prevState) => ({
			secondsElapsed: prevState.secondsElapsed + 1
		}));
	}

	// did methods are called right after something happens
	// invoked immediately before mounting occurs
	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	// will methods are called right before something happens
	// removing the component from the DOM
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				<p>Seconds Elapsed: {this.state.secondsElapsed}</p>
			</div>
		);
	}
}

export default Timer;