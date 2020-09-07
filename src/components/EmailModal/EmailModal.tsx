import React from 'react';
import { Dialog, TextField, Grid, Button, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { isEmailValid } from '../../utils/validators';
import apiWrapper from '../../utils/apiWrapper';
import styles from './EmailModal.module.css';

export const EmailModal: React.FC<{
	isOpen: boolean;
	closeModal: () => void;
}> = ({ isOpen, closeModal }) => {
	const [ emailInTransit, setEmailInTransit ] = React.useState<boolean>(false);
	const [ emailWasSent, setEmailWasSent ] = React.useState<boolean>(false);
	const [ emailIsValid, setEmailIsValid ] = React.useState<boolean>(true);
	const [ emailText, setEmailText ] = React.useState('');
	const [ messageText, setMessageText ] = React.useState('');

	const handleClose = (event: any, reason: any) => {
		if (reason === 'clickaway') {
			return;
		}
		setEmailWasSent(false);
	};

	const handleEmailChange = (event: any) => {
		setEmailIsValid(true);
		setEmailText(event.target.value);
	};

	const handleMessageChange = (event: any) => {
		setMessageText(event.target.value);
	};

	const verifyFields = async () => {
		if (emailText.trim().length !== 0 && messageText.trim().length !== 0 && isEmailValid(emailText)) {
			setEmailInTransit(true);
			await sendEmail(emailText, messageText);
			setEmailWasSent(true);
			setEmailInTransit(false);
			//show snackbar
			resetValues();
			closeModal();
		} else {
			if (!isEmailValid(emailText)) {
				setEmailIsValid(false);
			}
		}
	};

	const resetValues = () => {
		setEmailText('');
		setMessageText('');
		setEmailIsValid(true);
	};

	return (
		<div>
			<Dialog open={isOpen} maxWidth="md">
				{!emailInTransit ? (
					<div className={styles.dialogGrid}>
						<Grid container direction="column" justify="space-evenly">
							<Grid item>
								<div style={{ textAlign: 'center' }}>
									<h3>Send me a message!</h3>
								</div>
							</Grid>
							<Grid item>
								<TextField
									autoFocus
									margin="dense"
									id="email"
									label="Your Email Address"
									type="email"
									variant="outlined"
									fullWidth
									onChange={handleEmailChange}
									error={!emailIsValid}
									helperText={
										!emailIsValid ? (
											'Please enter a valid email address'
										) : (
											'Please complete this field'
										)
									}
								/>
							</Grid>
							<Grid item>
								<TextField
									margin="dense"
									id="message"
									label="Type your message here"
									type="text"
									variant="outlined"
									fullWidth
									multiline
									rows={4}
									onChange={handleMessageChange}
								/>
							</Grid>
							<Grid item>
								<div style={{ color: 'rgb(16, 115, 224)', paddingTop: '2.5vh' }}>
									<Grid container direction="row" justify="flex-end" alignItems="flex-end">
										<Grid item>
											<Button color="inherit" onClick={closeModal}>
												Cancel
											</Button>
										</Grid>
										<Grid item>
											<Button
												disabled={
													!emailIsValid ||
													emailText.trim().length === 0 ||
													messageText.trim().length === 0
												}
												color="inherit"
												onClick={verifyFields}
											>
												Send
											</Button>
										</Grid>
									</Grid>
								</div>
							</Grid>
						</Grid>
					</div>
				) : (
					<div
						style={{
							width: '50vw',
							height: '50vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							alignContent: 'center'
						}}
					>
						<CircularProgress style={{ margin: 'auto', height: '5vw', width: '5vw' }} />
					</div>
				)}
			</Dialog>
			<Snackbar open={emailWasSent} autoHideDuration={6000} onClose={handleClose}>
				<Alert severity="success">Email sent!</Alert>
			</Snackbar>
		</div>
	);
};

async function sendEmail(senderEmail: string, messageText: string) {
	const reqBody = {
		message: messageText,
		senderEmail: senderEmail
	};

	apiWrapper.post('/sendEmail', reqBody).then(() => {
		return;
	});
}

export default EmailModal;
