import React from 'react';
import styles from './Desk.module.css';

import DeskImage from '../../images/Desk.png';

export const Desk = () => {
	return (
		<div className={styles.deskContainerMain}>
			<img className={styles.deskContainerImage} src={DeskImage} alt="deskImage" />
		</div>
	);
}

export default Desk;
