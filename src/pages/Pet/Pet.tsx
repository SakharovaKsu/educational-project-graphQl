import React from 'react';
import { Counter, Profile, SpecialList } from './components';
import { Typography, Paper } from '@mui/material';
import cln from './styles.module.scss';

export const Pet = () => {
  return (
      <Paper className={cln.paper} elevation={6}>
        <Typography className={cln.title} variant={'h3'}>Pet</Typography>
        <Profile/>
        <Counter/>
        <SpecialList />
      </Paper>
  );
};
