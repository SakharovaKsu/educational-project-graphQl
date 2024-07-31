import React, { useState } from 'react';
import { useCheckOut } from '../../hooks';

export const CheckOutPet = () => {
  const {checkOut, customer, loading, errors, error} = useCheckOut()
  const [value, setValue] = useState<string>('')

  if (loading) return <>Loading... User verification in progress...</>

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <h2>Check out pet</h2>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={() => checkOut(value)}>check out</button>
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
