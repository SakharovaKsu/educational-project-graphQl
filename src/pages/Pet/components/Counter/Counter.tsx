import React from 'react';
import { useQueryAvailablePets, useQueryAllPets } from '../../../../hooks';
import { Typography, List, ListItem, Paper } from '@mui/material';
import { Pets } from '../../types';
import cln from './styles.module.scss';

export const Counter = () => {
  const { availablePets, loading, error } = useQueryAvailablePets();
  const { pets, loading: loadingPets, error: errorPets} = useQueryAllPets();

  if (loading && loadingPets) return <div>Loading...</div>;

  if (error && errorPets) return <div>{error.message}</div>;

  return (
    <Paper className={cln.paper} elevation={1}>
      <Typography className={cln.title} variant={'h4'}>List</Typography>
      <Typography className={cln.text} variant={'h5'}>Available Pets: {availablePets}</Typography>
      <List className={cln.list}>
        {pets.map((pet: Pets) => (
            <ListItem className={cln.listItem} key={pet.id}>
              <Typography variant={'body1'}>Name: {pet.name}</Typography>
              <Typography variant={'body1'}>Weight: {pet.weight}</Typography>
            </ListItem>
        ))}
      </List>
    </Paper>
  );
};
