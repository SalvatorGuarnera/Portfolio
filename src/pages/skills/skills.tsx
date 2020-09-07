import React from 'react';
import styles from './skills.module.css';
import { Grid } from '@material-ui/core';

export const Skills = () => {
	return (
		<div style={{width: '100vw', height: '100%' }}>
			<Grid container className={styles.gridStyling} direction="column" justify="center" alignItems="center">
				<Grid className={styles.aboutMeText} style={{ paddingTop: '5vh' }} item>
					<h2>About me</h2>
				</Grid>
				<Grid className={styles.aboutParagraphText} style={{ paddingBottom: '5vh', width: '60%' }} item>
					<p>
						I am currently a Computer Science student at DePaul University.<br />
						<br />This past year, in addition to being a full time student and a part time QA employee,
						I successfully designed, programmed and launched a college-only social media application
						called Kegstand - The College Network.<br />
						<br />Kegstand was launched under my iOS application company - Spiralus.
					</p>
				</Grid>
			</Grid>
		</div>
	);
}

export default Skills;
