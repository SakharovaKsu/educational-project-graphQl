import React from 'react';
import { useCheckin } from '../../hooks';

export const CheckinPet = () => {
  const {checkIn, pet, loading, errors, error} = useCheckin()

  if (loading) return <>Loading...</>

  if (errors || error) return <>Error... {error?.message || errors}</>
  console.log(error);

  return (
    <div>
      <h2>Checkin</h2>
      <button onClick={() => checkIn('C-1')}>Checkin</button>
      {pet && <span>pet: {pet.name}</span>}
    </div>
  );
};
