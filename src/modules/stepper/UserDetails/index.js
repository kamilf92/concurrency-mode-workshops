import React, { Suspense, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { getAccountDetails } from '../../../api';

const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: 200,
    maxHeight: 200
  },
  list: {
    listStyle: 'none'
  }
}));

const AccountDetails = ({ account }) => {
  const { number, balance, currency } = account.read();
  const classes = useStyles();

  return (
    <Fragment>
      <h2>Account info</h2>
      <ul className={classes.list}>
        <li>Number: {number}</li>
        <li>Balance: {balance}</li>
        <li>Currency: {currency}</li>
      </ul>
    </Fragment>
  );
}

export default function UserDetails({ data }) {
  const user = data.read();
  const account = getAccountDetails({ accountId: user.accountId });
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
        <h2>User info</h2>
        <img src={user.image} className={classes.image} alt="user" />
        <ul className={classes.list}>
          <li>Name: {user.name}</li>
          <li>Surname: {user.surname}</li>
          <li>City: {user.city}</li>
          <li>Country: {user.country}</li>
        </ul>
      </Grid>
      <Grid item xs={6}>
          <Suspense fallback="Loading account...">
            <AccountDetails account={account} />
          </Suspense>
      </Grid>
    </Grid>
  );
};