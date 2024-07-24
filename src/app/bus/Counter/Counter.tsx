import React from 'react';
import { useQueryAvailablePets } from '../../../hooks';

export const Counter = () => {
  const { data, loading, error } = useQueryAvailablePets();
  console.log(data);

  return (
    <div>
      Counter
    </div>
  );
};
