import React, { Component } from 'react';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';

import Logo from '../../images/Logo.svg';

import styles from './TopBar.module.css';

const style = {
	palette: {
		primary: {
			light: '#10afe0',
			main: '#1075e0',
			dark: '#1041e0',
			contrastText: '#000'
		},
		secondary: {
			light: '#2c2c2c',
			main: '#000000',
			dark: '#000000',
			contrastText: '#000'
		}
	},
	typography: {
		h4: {
			fontFamily: 'Arial',
			fontWeight: 900
		},
		subtitle1: {
			fontSize: 20
		},
		body1: {
			fontWeight: 900
		},
		button: {
			fontStyle: 'regular'
		}
	}
};

export class TopBar extends Component {
	render() {
		return (
			<div className={styles.topBar}>
				<div className={styles.flexContainer}>
					<div className={styles.topBarLeft}>
						<div className={styles.logoContainer}>
							<input
								type="image"
								src={Logo}
								name="logo"
								className={styles.logoButton}
								id="logo"
								alt="text"
							/>
						</div>
					</div>
					<div className={styles.topBarRight}>
						<a href="hello" className={styles.buttonOne}>
							Contact Me
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(TopBar);
