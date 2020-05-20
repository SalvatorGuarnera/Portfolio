import React, { Component } from 'react';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';

import Logo from '../images/Logo.svg';

const styles = {
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
			<div className="top-bar">
				<div className="flex-container">
					<div className="top-bar-left">
						<div className="logo-container">
							<input type="image" src={Logo} name="logo" className="logo-button" id="logo" />
						</div>
					</div>
					<div className="top-bar-right">
						<a href="hello" className="button1">
							Contact Me
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(TopBar);
