import React, { Component } from 'react';
import styles from './skills.module.css';
import { Grid } from '@material-ui/core';

export class Skills extends Component {
	render() {
		return (
			<Grid container className={styles.gridStyling} direction="column" justify="center" alignItems="center">
				<Grid style={{ paddingTop: '5vh' }} item>
					<h2 style={{ fontSize: '2.0rem' }}>About me</h2>
				</Grid>
				<Grid style={{ paddingBottom: '5vh', width: '60%' }} item>
					<p>
						I am currently a Computer Science student at DePaul University. This past year, in addition to
						being a full time student and a part time QA employee, I successfully designed, programmed and
						launched a college-only social media application called Kegstand - The College Network. Kegstand
						was launched under my iOS application company - Spiralus.
					</p>
				</Grid>
			</Grid>
		);
	}
}

export default Skills;
