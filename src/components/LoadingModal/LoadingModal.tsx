import React from 'react';
import styles from './LoadingModal.module.css';
import { Dialog, CircularProgress } from '@material-ui/core';

export const LoadingModal: React.FC<{
	isOpen: boolean;
}> = ({ isOpen }) => {
	return (
		<Dialog fullScreen open={isOpen}>
			<CircularProgress className={styles.circleStyling} />
		</Dialog>
	);
};

export default LoadingModal;
