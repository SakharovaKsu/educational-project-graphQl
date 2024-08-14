import React, { useState } from 'react';
import { useCheckOut } from '../../hooks';
import {Button, Paper, TextField, Typography} from '@mui/material';
import { LinearDeterminate } from '../../components/LinearProgress/LinearProgress';
import cln from './styles.module.scss';

export const CheckOutPet = () => {
  const {checkOut, customer, loading, errors, error} = useCheckOut()
  const [value, setValue] = useState<string>('')

  return (
    <Paper className={cln.paper} elevation={6}>
      {loading && <LinearDeterminate/>}
      <div className={cln.containerForm}>
        <div>
          <Typography variant={'h5'} gutterBottom>Check out pet</Typography>
          <TextField variant={'standard'}
                     className={cln.textField}
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
          />
          <Button variant={'contained'}
                  color={'primary'}
                  onClick={() => checkOut(value)}>
            check out
          </Button>
        </div>
        {errors && error &&
          <Typography variant={'overline'}
                      className={cln.error}
                      display={'block'}
                      gutterBottom>
            Error... {error?.message || errors}
          </Typography>}
        {customer &&
          <>
            <Typography variant={'subtitle1'}>Username: {customer.name}</Typography>
            <Typography variant={'subtitle2'}>
              Current Pets: {customer?.currentPets.map((pet: any) => (
              <div key={pet.name}>
                <Typography variant={'body2'}>status: {pet.status}</Typography>
                <Typography variant={'body2'}>weight: {pet.weight}</Typography>
              </div>))}
            </Typography>
          </>
        }
      </div>
    </Paper>
  );
};
