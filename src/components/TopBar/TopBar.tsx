import React from 'react';

//MUI
import { Button } from '@material-ui/core';
import Logo from '../../images/Logo.svg';
import styles from './TopBar.module.css';
import { makeStyles } from '@material-ui/core/styles';

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
				<div style={{ marginRight: '5vw' }}>
					<Button
						className={styles.contactButton}
						classes={{ root: buttonClass.root, label: buttonClass.label }}
						variant="outlined"
					>
						Contact Me
					</Button>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
