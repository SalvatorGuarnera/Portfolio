import React from 'react';
import styles from './ProjectExpansionPanel.module.css';
import { Grid, Accordion, AccordionSummary, AccordionDetails, List, ListItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Technologies, LinkSet } from '../../models/project.model';
import AppStore from '../../images/AppStore.svg';
import GitHub from '../../images/GitHub_Logo.png';
import LockIcon from '@material-ui/icons/Lock';

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
		<Accordion>
			<AccordionSummary>
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
			</AccordionSummary>
			<AccordionDetails>
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
							<React.Fragment>
								<hr
									style={{
										borderTop: '1px solid rgb(16, 115, 224)',
										margin: '2.5vw'
									}}
								/>
								<List dense={true}>
									<ListItem classes={{ root: listClass.item }}>
										{linkSet['iOS'] ? (
											<Button
												classes={{ root: listClass.button }}
												target="_blank"
												href={linkSet['iOS']}
											>
												<img className={styles.appStoreIcon} src={AppStore} alt="iOS button" />
											</Button>
										) : (
											undefined
										)}
										{PlaceGithubIcon(linkSet)}
									</ListItem>
								</List>
							</React.Fragment>
						</div>
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
};

const PlaceGithubIcon = (linkSet: LinkSet) => {
	const listClass = listStylings();
	const linkExists = linkSet['github'] === null ? false : true;
	return (
		<Button
			style={{ marginLeft: linkSet['iOS'] ? '2.5vw' : '0' }}
			classes={{ root: listClass.button }}
			target="_blank"
			href={linkSet['github']}
			disabled={!linkExists}
		>
			<div
				className={styles.iconHolder}
				style={{ backgroundColor: linkExists ? 'white' : 'gray', color: 'white', borderRadius: '15px' }}
			>
				{linkExists ? undefined : <LockIcon className={styles.lockIcon} color="inherit" />}
				<img
					style={{ opacity: linkExists ? '1' : '0.5' }}
					className={styles.githubIcon}
					src={GitHub}
					alt="Github Button"
				/>
			</div>
		</Button>
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
