import React from 'react';
import styles from './ProjectExpansionPanel.module.css';
import {
	Grid,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	List,
	ListItem,
	lighten
} from '@material-ui/core';
import { Technologies, LinkSet } from '../../models/project.model';

export const ProjectExpansionPanel: React.FC<{
	name: string;
	technologies: Array<Technologies>;
	about: string;
	linkSet: LinkSet;
	banner: string;
}> = ({ name, technologies, about, linkSet, banner }) => {
	const cleanTechData = scrubTechData(technologies);

	return (
		<ExpansionPanel>
			<ExpansionPanelSummary>
				<div
					className={styles.mainGrid}
					style={{
						backgroundImage: `url(${banner})`
					}}
				>
					<div className={styles.topLeftTriangle} />
					<div className={styles.bottomRightTriangle}>
						<p>{name}</p>
					</div>
				</div>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Grid container direction="column" justify="flex-start" alignItems="flex-start">
					<Grid item>
						<h3>About</h3>
						<p>{about}</p>
					</Grid>
					<Grid item>
						<h3>Technologies</h3>
						<Grid container direction="row" justify="space-evenly">
							{cleanTechData.map((techChunk: string[], techChunkIndex) => (
								<Grid key={`grid-tech-item-${techChunkIndex}`} item>
									<List>
										{techChunk.map((technology, techIndex) => (
											<ListItem key={`tech-item-${techChunkIndex}-${techIndex}`}>
												<h5>{technology}</h5>
											</ListItem>
										))}
									</List>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

const scrubTechData = (technologies: Array<Technologies>) => {
	let mainArray: Array<Array<string>> = [];

	technologies.forEach((techChunk) => {
		Object.keys(techChunk).map((key) => {
			let subArray: Array<string> = [];
			techChunk[key].map((technology) => {
				subArray.push(technology);
			});
			mainArray.push(subArray);
		});
	});

	return mainArray;
};

export default ProjectExpansionPanel;
