import React from 'react';
import { useCustomerAuth } from '../../hooks';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { LinearDeterminate } from '../../components/LinearProgress/LinearProgress';

export const Login = () => {
  const {handleChange, logIn, authorizedCustomer, loading} = useCustomerAuth()

  return (
    <Paper elevation={6} style={{padding: '25px', marginBottom: '25px'}}>
      {loading && <LinearDeterminate/>}
      <Typography variant={'h5'} gutterBottom>Login</Typography>
      <div style={{display: 'flex', gap: '25px', padding: '25px 0'}}>
        <TextField variant={'standard'} type={'text'} placeholder={'username'} name={'username'} onChange={handleChange} />
        <TextField variant={'standard'} type={'password'} placeholder={'password'} name={'password'} onChange={handleChange} />
      </div>
      <Button variant={'contained'} type={'submit'} onClick={logIn}>Login</Button>
      {authorizedCustomer &&
        <Typography style={{paddingTop: '25px'}} variant={'body2'}>
          name: {authorizedCustomer?.customer.username}
        </Typography>}
    </Paper>
  );
};
