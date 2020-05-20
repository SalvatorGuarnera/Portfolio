import React, { Component } from 'react';

import DeskImage from '../images/Desk.png';

export class Desk extends Component {
	render() {
		return (
			<div className="desk-container-main">
				<img className="desk-container-image" src={DeskImage} />
			</div>
		);
	}
}

export default Desk;
