import React from 'react';
import { useCheckOut } from '../../hooks';

export const CheckOutPet = () => {
  const {checkOut, customer, loading, errors, error} = useCheckOut()

  if (loading) return <>Loading... User verification in progress...</>

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <h2>Check out pet</h2>
      <button onClick={() => checkOut('C-4')}>check out</button>
      {errors || error && <p>Error... {error?.message || errors}</p>}
      {customer &&
          <>
            <p>pet: {customer.name}</p>
            <div>current Pets: {customer?.currentPets.map((pet: any) => (
              <ul key={pet.name}>
                <li>status: {pet.status}</li>
                <li>weight: {pet.weight}</li>
              </ul>
            ))}</div>
          </>
      }
    </div>
  );
};
