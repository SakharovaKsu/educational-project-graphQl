import React, { useState } from 'react';
import { useCheckOut } from '../../hooks';
import {Button, Paper, TextField, Typography} from '@mui/material';
import { LinearDeterminate } from '../../components/LinearProgress/LinearProgress';

export const CheckOutPet = () => {
  const {checkOut, customer, loading, errors, error} = useCheckOut()
  const [value, setValue] = useState<string>('')

  return (
    <Paper elevation={6} style={{padding: '25px', marginBottom: '25px'}}>
      {loading && <LinearDeterminate/>}
      <div style={{display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'flex-start'}}>
        <div>
          <Typography variant={'h5'} gutterBottom>Check out pet</Typography>
          <TextField variant={'standard'}
                     style={{marginRight: '25px'}}
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
                      style={{color:'red'}}
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
