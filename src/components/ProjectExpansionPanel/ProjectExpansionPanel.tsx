import React from 'react';
import styles from './ProjectExpansionPanel.module.css';
import { Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, List, ListItem } from '@material-ui/core';

export const ProjectExpansionPanel: React.FC<{
	name: string;
	technologies: Array<Array<string>>;
	about: string;
	linkSet: Array<string>;
}> = ({ name, technologies, about, linkSet }) => {
	return (
		<ExpansionPanel>
			<ExpansionPanelSummary>
				<div className={styles.mainGrid}>
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
							{technologies.map((techChunk) => (
								<Grid item>
									<List>
										{techChunk.map((technology) => (
											<ListItem>
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

export default ProjectExpansionPanel;
