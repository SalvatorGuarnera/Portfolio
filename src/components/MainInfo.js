import React, { Component } from 'react';
import Desk from '../components/Desk';
//MUI
import Typography from '@material-ui/core/Typography';
import DeskImage from '../images/Desk.png';

export class MainInfo extends Component {
	render() {
		return (
			<div className="info-container">
				<h2>
					Hi, my name is <span className="highlighted-name">Salvator Guarnera</span>.
				</h2>
				<div className="subtitle-text">
					<p>I'm passionate about bringing ideas to life with code.</p>
				</div>
				<div className="view-work-container">
					<div className="view-work-button-container">
						<a href="workButton" className="button2">
							See my Work!
						</a>
					</div>
				</div>
				<br />
				<Desk />
			</div>
		);
	}
}

export default MainInfo;
