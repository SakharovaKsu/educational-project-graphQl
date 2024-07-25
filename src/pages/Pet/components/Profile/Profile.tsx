import React from 'react';
import { useQueryProfile } from '../../../../hooks';

export const Profile = () => {
  const {getProfile, loading, error, profile} = useQueryProfile()

  const loadProfile = () => getProfile({variables: {id: 'C-1'}})

  if(loading) return <div>Loading...</div>

  if(error) return <div>Error</div>

  return (
    <p>
      <button onClick={loadProfile}>Load Profile</button>
      <h3>Profile name: {profile?.name}</h3>
    </p>
  );
};
