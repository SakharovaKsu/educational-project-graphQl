import React from 'react';
import { useQueryAllAvailablePets } from '../../../../hooks';

export const SpecialList = () => {
  const {getAllAvailablePets, loading, error, pets} = useQueryAllAvailablePets()

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h4>SpecialList</h4>
      <button onClick={() => getAllAvailablePets()}>Download</button>
      {pets?.map((pet: {id: string; name: string;}) => (
        <div key={pet.id}>
          <div>Name: {pet.name}</div>
        </div>
      ))}
    </div>
  );
};
