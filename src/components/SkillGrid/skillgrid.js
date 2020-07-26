import React, { Component } from 'react';
import styles from './skillgrid.module.css';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export class SkillGrid extends Component {
	render() {
		return (
			<div className={styles.mainGrid}>
				<div className={styles.topHalf} />
				<div className={styles.bottomHalf} />
				<div className={styles.flexBox}>
					<div className={styles.flexItemOne}>
						<Grid container direction="column" justify="flex-start">
							<Grid item>
								<h3>Front End Experience</h3>
							</Grid>
							<Grid item>
								<List>
									<ListItem>
										<p>React</p>
									</ListItem>
									<ListItem>
										<p>React Redux</p>
									</ListItem>
									<ListItem>
										<p>React Router</p>
									</ListItem>
									<ListItem>
										<p>Javascript</p>
									</ListItem>
									<ListItem>
										<p>TypeScript</p>
									</ListItem>
									<ListItem>
										<p>HTML, CSS, SASS</p>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</div>
					<div className={styles.flexItemOne}>
						<Grid container direction="column" justify="flex-start">
							<Grid item>
								<h3>Full Stack Experience</h3>
							</Grid>
							<Grid item>
								<List>
									<ListItem>
										<p>Swift, Objective-C</p>
									</ListItem>
									<ListItem>
										<p>Java, C#</p>
									</ListItem>
									<ListItem>
										<p>Python</p>
									</ListItem>
									<ListItem>
										<p>Node.js</p>
									</ListItem>
									<ListItem>
										<p>Firebase, Firestore, Cloud Functions</p>
									</ListItem>
									<ListItem>
										<p>AWS Lambda, DynamoDB, S3</p>
									</ListItem>
									<ListItem>
										<p>Docker, Git, CI/CD</p>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</div>
					<div className={styles.flexItemOne}>
						<Grid container direction="column" justify="flex-start">
							<Grid item>
								<h3>Interesting Courses I've Completed</h3>
							</Grid>
							<Grid item>
								<List>
									<ListItem>
										<p>Foundations of AI</p>
									</ListItem>
									<ListItem>
										<p>Cryptology</p>
									</ListItem>
									<ListItem>
										<p>Blockchains and Smart Contracts</p>
									</ListItem>
									<ListItem>
										<p>Theory of Numbers</p>
									</ListItem>
									<ListItem>
										<p>Wonders, Cons, and Scandals (Conspiracy theory class)</p>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		);
	}
}

export default SkillGrid;
