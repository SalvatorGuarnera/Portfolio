import React from 'react';
import styles from './projects.module.css';
import { Grid } from '@material-ui/core';
import { ProjectExpansionPanel } from '../../components/ProjectExpansionPanel/ProjectExpansionPanel';
import { Project } from '../../models/project.model';

export const Projects: React.FC<{
	projectData: Array<Project>;
}> = ({ projectData }) => {
	return (
		<div className={styles.container}>
			<Grid
				container
				direction="column"
				justify="flex-start"
				alignItems="flex-start"
				spacing={0}
				style={{ width: '100vw', padding: 'none', margin: 'none' }}
			>
				<Grid item>
					<div className={styles.projectTitleHolder}>
						<hr
							style={{
								borderTop: '1px solid rgb(16, 115, 224)',
								width: '100vw'
							}}
						/>
						<h3>Projects</h3>
					</div>
				</Grid>
				<Grid style={{ width: '100vw' }} item>
					{projectData.map((project, index) => (
						<ProjectExpansionPanel
							key={'project-expansion-panel-' + index}
							name={project.name}
							technologies={project.technologies}
							about={project.about}
							linkSet={project.linkSet}
							banner={project.banner}
						/>
					))}
				</Grid>
			</Grid>
		</div>
	);
};

export default Projects;
