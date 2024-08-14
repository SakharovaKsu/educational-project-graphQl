import React from 'react';
import { useQueryAllAvailablePets } from '../../../../hooks';
import { Paper, Typography, Button } from '@mui/material';

export const SpecialList = () => {
  const {getAllAvailablePets, loading, error, pets} = useQueryAllAvailablePets()

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Paper elevation={1} style={{padding: '25px', marginBottom: '25px'}}>
      <Typography style={{paddingBottom: '20px'}} variant={'h4'}>SpecialList</Typography>
      <Button variant={'contained'} type={'submit'} onClick={() => getAllAvailablePets()}>Download</Button>
        <div style={{display: 'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: '20px', marginTop: '20px'}}>
          {pets?.map((pet: {id: string; name: string;}) => (
            <Typography key={pet.id} style={{border: '1px solid #a8a6a6', borderRadius: '5px', padding: '10px'}} variant={'body1'}>Name: {pet.name}</Typography>
          ))}
        </div>
    </Paper>
  );
};
