import React from 'react';
import { useQueryAvailablePets, useQueryAllPets } from '../../../../hooks';
import { SpecialList } from '../SpecialList/SpecialList';

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
    <>
      Available Pets: {availablePets}
      <h3>List</h3>
      <ul>
        {pets.map((pet: Pets) => (
            <li key={pet.id}>
              <p>Name: {pet.name}</p>
              <p>Weight: {pet.weight}</p>
            </li>
        ))}
      </ul>
      <SpecialList />
    </>
  );
};
