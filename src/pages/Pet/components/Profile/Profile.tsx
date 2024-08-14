import React from 'react';
import { useQueryProfile } from '../../../../hooks';
import { Typography, Button, Paper } from '@mui/material';

export const Profile = () => {
  const {getProfile, loading, error, profile} = useQueryProfile()

  const loadProfile = () => getProfile({variables: {id: 'C-2'}})

  if(loading) return <div>Loading...</div>

  if(error) return <div>Error</div>

  return (
    <Paper elevation={1} style={{padding: '25px', marginBottom: '25px'}}>
      <Typography style={{paddingBottom: '25px'}} variant={'h5'}>Profile name: {profile?.name}</Typography>
      <Button variant={'contained'} type={'submit'} onClick={loadProfile}>Load Profile</Button>
    </Paper>
  );
};
