import React from 'react';
import styles from './projects.module.css';
import { Grid } from '@material-ui/core';
import { ProjectExpansionPanel } from '../../components/ProjectExpansionPanel/ProjectExpansionPanel';

export const Projects = () => {
	const projectArray = grabProjectObjects();

	return (
		<div style={{ marginTop: '20vh', borderTop: '1px solid black' }}>
			<Grid
				container
				direction="column"
				justify="flex-start"
				alignItems="flex-start"
				spacing={0}
				style={{ width: '100vw', padding: 'none', margin: 'none' }}
			>
				<Grid item>
					<div>
						<h3>Projects</h3>
					</div>
				</Grid>
				<Grid style={{ width: '100vw' }} item>
					{projectArray.map((project, index) => (
						<ProjectExpansionPanel
							key={'project-expansion-panel-' + index}
							name={project.name}
							technologies={project.technologies}
							about={project.about}
							linkSet={project.linkSet}
						/>
					))}
				</Grid>
			</Grid>
		</div>
	);
};

function grabProjectObjects() {
	const kegstand = {
		name: 'Kegstand - The College Network',
		technologies: [
			[ 'Swift', 'Objective-C', 'Xcode' ],
			[ 'Node.js', 'Express.js', 'Stripe iOS SDK' ],
			[ 'Firebase Realtime Database', 'Cloud Firestore', 'Google Cloud Functions' ]
		],
		about: 'Here is a description about Kegstand the College Network',
		linkSet: [ 'linkOne.com' ]
	};

	const stockRank = {
		name: 'StockRank',
		technologies: [
			[ 'Swift', 'Xcode', '.NET' ],
			[ 'Node.js', 'C#', 'Selenium Webdriver' ],
			[ 'Firebase Realtime Database', 'Cloud Firestore', 'Google Cloud Functions' ],
			[ 'Docker' ]
		],
		about: 'Here is a description about StockRank',
		linkSet: [ 'linkOne.com' ]
	};

	const courtView = {
		name: 'CourtView Webcrawler',
		technologies: [ [ 'C#', 'Selenium Webdriver', 'Xcode' ] ],
		about: 'Here is a description about Courtview',
		linkSet: [ 'linkOne.com' ]
	};

	const projectArray = [];

	projectArray.push(kegstand);
	projectArray.push(stockRank);
	projectArray.push(courtView);

	return projectArray;
}

export default Projects;
