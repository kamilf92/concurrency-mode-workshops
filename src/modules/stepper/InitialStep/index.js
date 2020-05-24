import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

import Logo from './logo-mui.svg';

export function InitialStep() {
  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <Paper style={{ padding: 24}}>
          <Typography gutterBottom variant="h4">Concurrency mode workshops</Typography>
          <Typography>
            This stepper was designed based on api material-ui
          </Typography>
          <Typography variant="overline">
            https://material-ui.com/components/steppers/
          </Typography> 
          <img src={Logo} alt="logo-mui" style={{ maxHeight: 100, marginTop: 16 }} />
        </Paper>
      </Grid>
    </Grid>
  );
};