import React, { useState } from 'react';
import { useCheckin, usePetReturned } from '../../hooks';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { LinearDeterminate } from '../../components/LinearProgress/LinearProgress';

export const CheckinPet = () => {
  const {checkIn, pet, loading, errors, error} = useCheckin()
  const {petReturned} = usePetReturned()

  const [value, setValue] = useState<string>('')

  return (
    <Paper elevation={6} style={{padding: '25px', marginBottom: '25px'}}>
      {loading && <LinearDeterminate/>}
      <div style={{display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'flex-start'}}>
        <div>
          <Typography variant={'h5'} gutterBottom>Checkin</Typography>
          <TextField style={{marginRight: '25px'}}
                     variant={'standard'}
                     value={value}
                     onChange={(e) => setValue(e.target.value)}/>
          <Button variant={'contained'}
                  onClick={() => checkIn(value)}
                  disabled={loading}>
            Checkin
          </Button>
        </div>
        {petReturned && (
            <div>
              <Typography variant={'subtitle1'}>Pet Returned</Typography>
              <Grid>
                <Typography variant={'body2'}>id: {petReturned.id}</Typography>
                <Typography variant={'body2'}>name: {petReturned.name}</Typography>
                <Typography variant={'body2'}>status: {petReturned.status}</Typography>
              </Grid>
            </div>)}
        {errors && error &&
            <Typography variant={'overline'}
                        style={{color:'red'}}
                        display={'block'}
                        gutterBottom>
              Error... {error?.message || errors}
            </Typography>
        }
        {pet && <Typography variant={'body1'}>pet: {pet.name}</Typography>}
      </div>
    </Paper>
  );
};
