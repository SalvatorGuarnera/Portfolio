import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import SkillGrid from './components/SkillGrid/skillgrid';
import { Projects } from './pages/projects/projects';
import apiWrapper from './utils/apiWrapper';
import { Project } from './models/project.model';
import LoadingModal from './components/LoadingModal/LoadingModal';

//MUI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
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

const App = () => {
	const [ areProjectsLoaded, setAreProjectsLoaded ] = React.useState(false);
	const [ projectArray, setProjectArray ] = React.useState<Array<Project>>([]);

	React.useEffect(
		() => {
			if (!areProjectsLoaded) {
				apiWrapper.get('getProjects').then((res) => {
					const newProjectArray = [];
					for (let i = 0; i < res.data.length; i++) {
						newProjectArray.push({ ...res.data[i] });
					}
					setProjectArray(newProjectArray);
					setAreProjectsLoaded(true);
				});
			}
		},
		[ areProjectsLoaded ]
	);

	return (
		<MuiThemeProvider theme={theme}>
			{areProjectsLoaded ? (
				<div style={{ backgroundColor: 'white', overflow: 'hidden' }}>
					<Grid container direction="column" justify="center" alignItems="center" spacing={1}>
						<Grid item>
							<About />
						</Grid>
						<Grid item>
							<Skills />
							<SkillGrid />
						</Grid>
						<Grid item>
							<div id="project-section">
								<Projects projectData={projectArray} />
							</div>
						</Grid>
					</Grid>
				</div>
			) : (
				<LoadingModal isOpen={!areProjectsLoaded} />
			)}
		</MuiThemeProvider>
	);
};

export default App;
