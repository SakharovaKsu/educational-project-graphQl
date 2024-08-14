import React from 'react';
import { useQueryProfile } from '../../../../hooks';
import { Typography, Button, Paper, CircularProgress } from '@mui/material';
import cln from './styles.module.scss';

export const Profile = () => {
  const {getProfile, loading, error, profile} = useQueryProfile()

  const loadProfile = () => getProfile({variables: {id: 'C-2'}})

  if(error) return <div>Error</div>

  return (
    <Paper className={cln.paper} elevation={1}>
      <Typography variant={'h5'}>Profile name: {profile?.name}</Typography>
      {loading && <CircularProgress color={'secondary'}/>}
      {!profile?.name && <Button variant={'contained'} type={'submit'} onClick={loadProfile}>Load Profile</Button>}
    </Paper>
  );
};
