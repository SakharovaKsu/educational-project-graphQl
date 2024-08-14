import React from 'react';
import { useQueryAllAvailablePets } from '../../../../hooks';
import { Paper, Typography, Button } from '@mui/material';
import cln from './styles.module.scss';

export const SpecialList = () => {
  const {getAllAvailablePets, loading, error, pets} = useQueryAllAvailablePets()

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Paper className={cln.paper} elevation={1}>
      <Typography  className={cln.title} variant={'h4'}>SpecialList</Typography>
      <Button variant={'contained'} type={'submit'} onClick={() => getAllAvailablePets()}>Download</Button>
        <div className={cln.list}>
          {pets?.map((pet: {id: string; name: string;}) => (
            <Typography key={pet.id} className={cln.listItem} variant={'body1'}>Name: {pet.name}</Typography>
          ))}
        </div>
    </Paper>
  );
};
