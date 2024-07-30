import React from 'react';
import { useCheckin } from '../../hooks';

export const CheckinPet = () => {
  const {checkIn, pet, loading, errors, error} = useCheckin()

  if (loading) return <>Loading... User verification in progress...</>

  return (
    <div>
      <h2>Checkin</h2>
      <button onClick={() => checkIn('C-4')}>Checkin</button>
      {errors || error && <p>Error... {error?.message || errors}</p>}
      {pet && <p>pet: {pet.name}</p>}
    </div>
  );
};
