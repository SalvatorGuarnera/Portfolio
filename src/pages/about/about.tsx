import React from 'react';
import MainInfo from '../../components/MainInfo/MainInfo';
import TopBar from '../../components/TopBar/TopBar';
import styles from './about.module.css';

export const About: React.FC<{ resumeUrl: string }> = ({ resumeUrl }) => {
	return (
		<div className={styles.fullContainer}>
			<div className={styles.backgroundImage}>
				<TopBar />
				<div className={styles.aboutContainer}>
					<MainInfo resumeUrl={resumeUrl} />
				</div>
			</div>
		</div>
	);
};

export default About;
