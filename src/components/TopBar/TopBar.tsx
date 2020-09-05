import React from 'react';

//MUI
import { Button, Grid } from '@material-ui/core';
import Logo from '../../images/Logo.svg';
import styles from './TopBar.module.css';
import { makeStyles } from '@material-ui/core/styles';
import GitHub from '../../images/GitHub-Mark-64px.png';

const buttonClasses = makeStyles({
	root: {
		borderRadius: 20
	},
	label: {
		textTransform: 'capitalize'
	}
});

export const TopBar = () => {
	const buttonClass = buttonClasses();
	return (
		<div className={styles.topBar}>
			<div className={styles.flexContainer}>
				<div className={styles.topBarLeft}>
					<div className={styles.logoContainer}>
						<input type="image" src={Logo} name="logo" className={styles.logoButton} id="logo" alt="text" />
					</div>
				</div>
				<div style={{ marginRight: '5vw', alignSelf: 'center' }}>
					<Grid container direction="row" spacing={2} alignItems="center">
						<Grid item>
							<Button
								className={styles.contactButton}
								classes={{ root: buttonClass.root, label: buttonClass.label }}
								variant="outlined"
							>
								Contact Me
							</Button>
						</Grid>
						<Grid item>
							<Button target="_blank" href={'https://github.com/SalvatorGuarnera'}>
								<img src={GitHub} alt="Github Button" style={{ height: '6vh', width: 'auto' }} />
							</Button>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
