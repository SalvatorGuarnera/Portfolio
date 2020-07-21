import React, { Component } from 'react';
import styles from './skillgrid.module.css';
import { Grid } from '@material-ui/core';

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
								<h3>Header</h3>
							</Grid>
							<Grid item>
								<ul>
									<li>
										<p>Item One</p>
									</li>
									<li>
										<p>Item Two</p>
									</li>
									<li>
										<p>Item Three</p>
									</li>
								</ul>
							</Grid>
							<Grid item>
								<p>A short description about this skill set</p>
							</Grid>
						</Grid>
					</div>
					<div className={styles.flexItemOne} />
					<div className={styles.flexItemOne} />
				</div>
			</div>
		);
	}
}

export default SkillGrid;
