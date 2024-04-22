import { useState } from 'react';
import { FormStateType, InputEventType, UseFormHookType } from '../types/form';

export default function useForm<T extends FormStateType>(initialState: T): UseFormHookType {
  const [form, setForm] = useState<FormStateType>(initialState);

  function input(e: InputEventType) {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setForm((prevState: FormStateType) => ({
      ...prevState,
      [name]: inputValue,
    }));
  }

  function reset() {
    setForm(initialState);
  }

  return [form, input, reset];
}
