import React from 'react';
import { useCustomerAuth } from '../../hooks';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { LinearDeterminate } from '../../components/LinearProgress/LinearProgress';
import cln from './styles.module.scss';

export const Login = () => {
  const {handleChange, logIn, authorizedCustomer, loading} = useCustomerAuth()

  return (
    <Paper className={cln.paper} elevation={6}>
      {loading && <LinearDeterminate/>}
      <Typography variant={'h5'} gutterBottom>Login</Typography>
      <div className={cln.form}>
        <TextField variant={'standard'} type={'text'} placeholder={'username'} name={'username'} onChange={handleChange} />
        <TextField variant={'standard'} type={'password'} placeholder={'password'} name={'password'} onChange={handleChange} />
      </div>
      <Button variant={'contained'} type={'submit'} onClick={logIn}>Login</Button>
      {authorizedCustomer &&
        <Typography className={cln.description} variant={'body2'}>
          name: {authorizedCustomer?.customer.username}
        </Typography>}
    </Paper>
  );
};
