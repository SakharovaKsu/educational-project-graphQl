import React from 'react';
import { useCreateAccount } from '../../hooks';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { LinearDeterminate } from '../../components/LinearProgress/LinearProgress';
import cln from './styles.module.scss';

export const Registration = () => {
  const {handleChange, save, createAccount, loading, error} = useCreateAccount()

  if (error) { return <p>{error.message}</p>}

  return (
    <Paper className={cln.paper} elevation={6}>
      {loading && <LinearDeterminate/>}
      <Typography variant={'h5'} gutterBottom>Registration</Typography>
      <div className={cln.form}>
        <TextField variant={'standard'} type={'text'} placeholder={'name'} name={'name'} onChange={handleChange} />
        <TextField variant={'standard'} type={'text'} placeholder={'username'} name={'username'} onChange={handleChange} />
        <TextField variant={'standard'} type={'password'} placeholder={'password'} name={'password'} onChange={handleChange} />
      </div>
      <Button variant={'contained'} type={'submit'} onClick={save}>Save</Button>
      {createAccount &&
        <Typography className={cln.description} variant={'body2'}>
          We already customer with name: {createAccount?.name}
        </Typography>}
    </Paper>
  );
};
