import React from 'react';
import { useCheckin, usePetReturned } from '../../hooks';

export const CheckinPet = () => {
  const {checkIn, pet, loading, errors, error} = useCheckin()
  const {petReturned} = usePetReturned()

  return (
    <div>
      <h2>Checkin</h2>
      <button onClick={() => checkIn('C-4')} disabled={loading}>Checkin</button>
      {petReturned && (
          <div>
            <h4>Pet Returned</h4>
            <p>id: {petReturned.id}</p>
            <p>name: {petReturned.name}</p>
            <p>status: {petReturned.status}</p>
          </div>)}
      {loading && <>Loading... User verification in progress...</>}
      {errors || error && <p>Error... {error?.message || errors}</p>}
      {pet && <p>pet: {pet.name}</p>}
    </div>
  );
};
