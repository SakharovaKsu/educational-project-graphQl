import React from 'react';
import { useQueryProfile } from '../../../../hooks';
import { Typography, Button, Paper } from '@mui/material';
import cln from './styles.module.scss';

export const Profile = () => {
  const {getProfile, loading, error, profile} = useQueryProfile()

  const loadProfile = () => getProfile({variables: {id: 'C-2'}})

  if(loading) return <div>Loading...</div>

  if(error) return <div>Error</div>

  return (
    <Paper className={cln.paper} elevation={1}>
      <Typography className={cln.title} variant={'h5'}>Profile name: {profile?.name}</Typography>
      <Button variant={'contained'} type={'submit'} onClick={loadProfile}>Load Profile</Button>
    </Paper>
  );
};
