import React, { Component } from 'react';
import photo from '../../images/NewYork.jpeg';
import styles from './skills.module.css';

export class Skills extends Component {
	render() {
		return (
			<div className={styles.projectPageMain}>
				<br />
				<br />
				<h2>About me</h2>
				<div className={styles.centeringBlock}>
					<div className={styles.projectPageAbout}>
						<p>
							I am currently a Computer Science student at DePaul University. This past year, in addition
							to being a full time student and a part time QA employee, I successfully designed,
							programmed and launched a college-only social media application called Kegstand - The
							College Network. Kegstand was launched under my iOS application company - Spiralus.
						</p>
					</div>
				</div>
				<div className={styles.skillsUpperhalf} />
				<div className={styles.skillsLowerhalf}>
					<div className={styles.skillsLowerhalfFiller} />
					<div className={styles.skillsColumnGrid}>
						<div className={styles.skillsColumnCellLeft} />
						<div className={styles.skillsColumnCellMid} />
						<div className={styles.skillsColumnCellRight} />
					</div>
				</div>
				<br />
				<div className={styles.fullContainer}>
					<img className={styles.imageDisplay} src={photo} alt="/" />
				</div>
			</div>
		);
	}
}

export default Skills;
