import React from 'react';
import styles from './skillgrid.module.css';
import { Grid } from '@material-ui/core';

export const SkillGrid = () => {
	const frontEndArray = [ 'React', 'React Redux', 'React Router', 'JavaScript', 'TypeScript', 'HTML, CSS, SASS' ];

	const fullStackArray = [
		'Swift, Objective-C',
		'Java, C#',
		'Python',
		'Node.js',
		'Firebase, Firestore, Cloud Functions',
		'AWS Lambda, DynamoDB, S3',
		'Docker, Git, CI/CD'
	];

	const interestCoursesArray = [
		'Foundations of AI',
		'Cryptology',
		'Blockchains and Smart Contracts',
		'Theory of Numbers',
		'Wonders, Cons and Scandals'
	];

	return (
		<div className={styles.mainGrid}>
			<div className={styles.topHalf} />
			<div className={styles.bottomHalf} />
			<div className={styles.flexBox}>
				<div className={styles.flexItemOne}>
					<Grid container direction="column" justify="center" alignItems="center">
						<Grid item>
							<div className={styles.skillHeader}>
								<h3 style={{ fontWeight: 'bold' }}>Front End Experience</h3>
							</div>
						</Grid>
						{frontEndArray.map((skill, index) => (
							<Grid item key={'fe-skill-' + index}>
								<p className={styles.skillItem}>{skill}</p>
							</Grid>
						))}
					</Grid>
				</div>
				<div className={styles.flexItemTwo}>
					<Grid container direction="column" justify="center" alignItems="center">
						<Grid item>
							<div className={styles.skillHeader}>
								<h3>Technologies and Skills</h3>
							</div>
						</Grid>
						{fullStackArray.map((skill, index) => (
							<Grid item key={'be-skill-' + index}>
								<p className={styles.skillItem}>{skill}</p>
							</Grid>
						))}
					</Grid>
				</div>
				<div className={styles.flexItemThree}>
					<Grid container direction="column" justify="center" alignItems="center">
						<Grid item>
							<div className={styles.skillHeader}>
								<h3>Interesting Courses I've Completed</h3>
							</div>
						</Grid>
						{interestCoursesArray.map((course, index) => (
							<Grid item key={'course-' + index}>
								<p className={styles.skillItem}>{course}</p>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default SkillGrid;
