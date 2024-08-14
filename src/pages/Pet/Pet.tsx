import React from 'react';
import { Counter, Profile, SpecialList } from './components';
import { Typography, Paper } from '@mui/material';

export const Pet = () => {
  return (
      <Paper elevation={6} style={{padding: '25px', marginBottom: '25px'}}>
        <Typography style={{paddingBottom: '25px'}} variant={'h3'}>Pet</Typography>
        <Profile/>
        <Counter/>
        <SpecialList />
      </Paper>
  );
};
