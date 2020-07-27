import React, { Component } from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import SkillGrid from './components/SkillGrid/skillgrid.tsx';

//MUI
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
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
			fontStyle: 'regular',
			disableFocusRipple: false,
			borderRadius: 10,
			border: 5
		}
	}
});

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Grid container direction="column" justify="center" alignItems="center" spacing={0}>
					<Grid item>
						<About />
					</Grid>
					<Grid item>
						<Skills />
						<SkillGrid />
					</Grid>
				</Grid>
			</MuiThemeProvider>
		);
	}
}

export default App;
