import React, { Component } from 'react';
import MainInfo from '../../components/MainInfo/MainInfo';
import TopBar from '../../components/TopBar/TopBar';
import styles from './about.module.css';

export class About extends Component {
	render() {
		return (
			<div className={styles.fullContainer}>
				<div className={styles.backgroundImage}>
					<TopBar />
					<div className={styles.aboutContainer}>
						<MainInfo />
					</div>
				</div>
			</div>
		);
	}
}

export default About;
