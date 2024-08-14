import React from 'react';
import { useQueryAvailablePets, useQueryAllPets } from '../../../../hooks';
import { Typography, List, ListItem, Paper } from '@mui/material';

type Pets = {
  id: string;
  name: string;
  weight: number;
}

export const Counter = () => {
  const { availablePets, loading, error } = useQueryAvailablePets();
  const { pets, loading: loadingPets, error: errorPets} = useQueryAllPets();

  if (loading && loadingPets) return <div>Loading...</div>;

  if (error && errorPets) return <div>{error.message}</div>;

  return (
    <Paper elevation={1} style={{padding: '25px', marginBottom: '25px'}}>
      <Typography style={{paddingBottom: '20px'}} variant={'h4'}>List</Typography>
      <Typography style={{paddingBottom: '10px'}} variant={'h5'}>Available Pets: {availablePets}</Typography>
      <List style={{display: 'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: '20px'}}>
        {pets.map((pet: Pets) => (
            <ListItem style={{display: 'flex', flexWrap: 'wrap', gap: '10px', border: '1px solid #a8a6a6', borderRadius: '5px'}} key={pet.id}>
              <Typography variant={'body1'}>Name: {pet.name}</Typography>
              <Typography variant={'body1'}>Weight: {pet.weight}</Typography>
            </ListItem>
        ))}
      </List>
    </Paper>
  );
};
