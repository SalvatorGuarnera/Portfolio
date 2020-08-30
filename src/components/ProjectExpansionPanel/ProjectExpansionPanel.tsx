import React from 'react';
import styles from './ProjectExpansionPanel.module.css';
import {
	Grid,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	List,
	ListItem,
	Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Technologies, LinkSet } from '../../models/project.model';
import AppStore from '../../images/AppStore.svg';
import GitHub from '../../images/GitHub_Logo.png';

const listStylings = makeStyles({
	item: {
		paddingLeft: '2.5vw',
		paddingTop: '0',
		paddingBottom: '0',
		paddingRight: '0'
	},
	button: {
		padding: '0'
	}
});

export const ProjectExpansionPanel: React.FC<{
	name: string;
	technologies: Array<Technologies>;
	about: string;
	linkSet: LinkSet;
	banner: string;
}> = ({ name, technologies, about, linkSet, banner }) => {
	const listClass = listStylings();
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
				<Grid container direction="column" justify="flex-start" alignItems="stretch">
					<Grid item>
						<div className={styles.detailText}>
							<h3 style={{ paddingLeft: '2.5vw' }}>About</h3>
							<h5 style={{ paddingLeft: '2.5vw', paddingRight: '15vw' }}>{about}</h5>
						</div>
					</Grid>
					<Grid item>
						<div className={styles.detailText}>
							<h3 style={{ paddingLeft: '2.5vw' }}>Technologies</h3>
							<Grid container direction="row" justify="flex-start">
								{cleanTechData.map((techChunk: string[], techChunkIndex) => (
									<Grid key={`grid-tech-item-${techChunkIndex}`} item>
										<List dense={true}>
											{techChunk.map((technology, techIndex) => (
												<ListItem
													classes={{ root: listClass.item }}
													key={`tech-item-${techChunkIndex}-${techIndex}`}
												>
													<h5>{technology}</h5>
												</ListItem>
											))}
										</List>
									</Grid>
								))}
							</Grid>
						</div>
					</Grid>
					<Grid item>
						<div className={styles.detailText}>
							{linkSet['iOS'] || linkSet['github'] ? (
								<React.Fragment>
									<h3 style={{ paddingLeft: '2.5vw' }}>Links</h3>
									<List dense={true}>
										<ListItem classes={{ root: listClass.item }}>
											{linkSet['iOS'] ? (
												<Button classes={{ root: listClass.button }}>
													<img
														src={AppStore}
														alt="iOS button"
														style={{ height: 'auto', width: '200px' }}
													/>
												</Button>
											) : (
												undefined
											)}
											{linkSet['github'] ? (
												<Button classes={{ root: listClass.button }} variant="outlined">
													<img
														src={GitHub}
														alt="Github Button"
														style={{ height: 'auto', width: '150px' }}
													/>
												</Button>
											) : (
												undefined
											)}
										</ListItem>
									</List>
								</React.Fragment>
							) : (
								undefined
							)}
						</div>
					</Grid>
				</Grid>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

const scrubTechData = (technologies: Array<Technologies>) => {
	let mainArray: Array<Array<string>> = [];

	technologies.forEach((techChunk) => {
		Object.keys(techChunk).forEach((key) => {
			let subArray: Array<string> = [];
			techChunk[key].forEach((technology) => {
				subArray.push(technology);
			});
			mainArray.push(subArray);
		});
	});

	return mainArray;
};

export default ProjectExpansionPanel;
