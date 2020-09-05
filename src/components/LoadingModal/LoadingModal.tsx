import React from 'react';
import { Dialog, CircularProgress } from '@material-ui/core';

export const LoadingModal: React.FC<{
	isOpen: boolean;
}> = ({ isOpen }) => {
	return (
		<Dialog fullScreen open={isOpen}>
			<CircularProgress style={{ margin: 'auto', height: '5vw', width: '5vw' }} />
		</Dialog>
	);
};

export default LoadingModal;
