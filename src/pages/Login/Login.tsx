import React from 'react';
import { useCustomerAuth } from '../../hooks';

export const Login = () => {
  const {handleChange, logIn, authorizedCustomer} = useCustomerAuth()

  return (
    <div>
      <h2>Login</h2>
      <input type={'text'} placeholder={'username'} name={'username'} onChange={handleChange} />
      <input type={'password'} placeholder={'password'} name={'password'} onChange={handleChange} />
      <button type={'submit'} onClick={logIn}>Login</button>
      {authorizedCustomer && <p>name: {authorizedCustomer?.customer.username}</p>}
    </div>
  );
};
