import React, { Component, Fragment } from 'react';
import MainInfo from '../components/MainInfo';
import TopBar from '../components/TopBar';

export class About extends Component {
	render() {
		return (
			<div className="background-image">
				<TopBar />
				<div className="about-container">
					<MainInfo />
				</div>
			</div>
		);
	}
}

export default About;
