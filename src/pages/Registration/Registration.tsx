import React from 'react';
import {useCreateAccount, useForm} from '../../hooks';

export const Registration = () => {
  const {handleChange, save, createAccount, loading, error} = useCreateAccount()

  if (loading) { return <p>Loading...</p>}

  if (error) { return <p>{error.message}</p>}

  return (
    <div>
      <h3>Registration</h3>
      <input type={'text'} placeholder={'name'} name={'name'} onChange={handleChange} />
      <input type={'text'} placeholder={'username'} name={'username'} onChange={handleChange} />
      <input type={'password'} placeholder={'password'} name={'password'} onChange={handleChange} />
      <button type={'submit'} onClick={save}>Save</button>
      {createAccount && <h4>We already customer with name: {createAccount?.name}</h4>}
    </div>
  );
};
