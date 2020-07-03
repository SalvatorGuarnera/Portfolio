import React, { Component } from 'react';
import styles from './projects.module.css';
import { Grid } from '@material-ui/core';

class Projects extends Component {
	render() {
		return (
			<Grid>
				<Grid item>
					<h2>Hi</h2>
				</Grid>
				<Grid item>
					<p>
						a Computer Science student at DePaul University. This past year, in addition to being a full
						time student and a part time QA employee, I successfully designed, programmed and launched a
						college-only social media application called Kegstand - The College Network. Kegstand was
						launched under my iOS application company - Spiralus.
					</p>
				</Grid>
			</Grid>
			// <div className={styles.projectPageMain}>
			// 	<h2>About me</h2>
			// 	<div className={styles.centeringBlock}>
			// 		<div className={styles.projectPageAbout}>
			// 			<p>
			// 				I am currently a Computer Science student at DePaul University. This past year, in addition
			// 				to being a full time student and a part time QA employee, I successfully designed,
			// 				programmed and launched a college-only social media application called Kegstand - The
			// 				College Network. Kegstand was launched under my iOS application company - Spiralus.
			// 			</p>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}

export default Projects;
