import React from 'react';
import { useCreateAccount } from '../../hooks';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { LinearDeterminate } from '../../components/LinearProgress/LinearProgress';

export const Registration = () => {
  const {handleChange, save, createAccount, loading, error} = useCreateAccount()

  if (error) { return <p>{error.message}</p>}

  return (
    <Paper elevation={6} style={{padding: '25px', marginBottom: '25px'}}>
      {loading && <LinearDeterminate/>}
      <Typography variant={'h5'} gutterBottom>Registration</Typography>
      <div style={{display: 'flex', gap: '25px', padding: '25px 0'}}>
        <TextField variant={'standard'} type={'text'} placeholder={'name'} name={'name'} onChange={handleChange} />
        <TextField variant={'standard'} type={'text'} placeholder={'username'} name={'username'} onChange={handleChange} />
        <TextField variant={'standard'} type={'password'} placeholder={'password'} name={'password'} onChange={handleChange} />
      </div>
      <Button variant={'contained'} type={'submit'} onClick={save}>Save</Button>
      {createAccount &&
          <Typography style={{paddingTop: '25px'}} variant={'body2'}>
            We already customer with name: {createAccount?.name}
          </Typography>}
    </Paper>
  );
};
