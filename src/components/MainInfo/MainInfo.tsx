import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Desk from '../Desk/Desk';
//MUI
import styles from './MainInfo.module.css';

const buttonClasses = makeStyles({
	root: {
		borderRadius: 20
	},
	label: {
		textTransform: 'capitalize'
	}
});

export const MainInfo: React.FC<{ resumeUrl: string }> = ({ resumeUrl }) => {
	const buttonClass = buttonClasses();
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
					<Grid container direction="row" justify="space-around" alignItems="center" spacing={2}>
						<Grid item>
							<Button
								className={styles.myWorkButton}
								classes={{ root: buttonClass.root, label: buttonClass.label }}
								variant="outlined"
								href="#project-section"
							>
								See My Work
							</Button>
						</Grid>
						<Grid item>
							<Button
								className={styles.myWorkButton}
								classes={{ root: buttonClass.root, label: buttonClass.label }}
								variant="outlined"
								target="_blank"
								href={resumeUrl}
							>
								View Resume
							</Button>
						</Grid>
					</Grid>
				</div>
			</div>
			<br />
			<div className={styles.deskDiv}>
				<Desk />
			</div>
		</div>
	);
};

export default MainInfo;
