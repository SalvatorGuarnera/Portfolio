import React, { Component } from 'react';
import styles from './Desk.module.css';

import DeskImage from '../../images/Desk.png';

export class Desk extends Component {
	render() {
		return (
			<div className={styles.deskContainerMain}>
				<img className={styles.deskContainerImage} src={DeskImage} alt="" />
			</div>
		);
	}
}

export default Desk;
