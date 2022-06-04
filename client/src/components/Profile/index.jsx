import React from 'react';
import Grid from '@mui/material/Grid';
import { useTheme } from '@emotion/react';
import CustomerListings from '../CustomerListings';
import CustomerRecentRentals from '../CustomerRecentRentals';

export default function Profile(props) {

	const theme = useTheme();
	return (
		<React.Fragment>
			<Grid container spacing={3} sx={{ paddingTop: theme.spacing(5), paddingBottom: theme.spacing(5) }}>
				<CustomerListings userID={props.userID} />
				<CustomerRecentRentals userID={props.userID}/>
			</Grid>
		</React.Fragment>
	);
}