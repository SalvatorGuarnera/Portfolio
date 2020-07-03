import React, { Component } from 'react';
import Desk from '../../components/Desk/Desk';
//MUI
import styles from './MainInfo.module.css';

export class MainInfo extends Component {
	render() {
		return (
			<div className={styles.infoContainer}>
				<h2>
					Hi, my name is <span className={styles.highlightedName}>Salvator Guarnera</span>.
				</h2>
				<div className={styles.subtitleText}>
					<p>I'm passionate about bringing ideas to life with code.</p>
				</div>
				<div className={styles.viewWorkContainer}>
					<div className={styles.viewWorkButtonContainer}>
						<a href="workButton" className={styles.buttonTwo}>
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
