import React, { Component } from 'react';
import styles from './projects.module.css';
import { Grid } from '@material-ui/core';

export class Projects extends Component {
	render() {
		return (
			<div style={{ marginTop: '20vh' }}>
				<Grid container direction="column" spacing={5}>
					<Grid item>
						<div className={styles.projectPageMain}>
							<h3>Hello there</h3>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Projects;
