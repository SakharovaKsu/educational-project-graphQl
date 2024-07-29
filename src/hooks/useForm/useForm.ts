import { useState } from 'react';
import { UserData } from '../../types/types';

export const useForm = (initialValues: UserData) => {
  const [form, setForm] = useState<UserData>(initialValues)

  const handleChange = (e: any) => {
    e.persist()
    setForm((prevState) => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  return { handleChange, form }
}
