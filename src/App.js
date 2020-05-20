import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/about';
import Skills from './pages/skills';
import Resume from './pages/resume';
import DeskImage from './images/Desk.png';
import Desk from './components/Desk';

//MUI
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';
import color from '@material-ui/core/colors/amber';
import { grey, blue } from '@material-ui/core/colors';

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
				<About />
				<Skills />
			</MuiThemeProvider>
			// <div className="background-image">
			//   <MuiThemeProvider theme={theme}>
			//     <Router>
			//       <Navbar/>
			//         <Switch>
			//           <Route exact path="/about" component={About}/>
			//           <Route exact path="/projects" component={Projects}/>
			//           <Route exact path="/resume" component={Resume}/>
			//         </Switch>
			//     </Router>
			//   </MuiThemeProvider>
		);
	}
}

export default App;
