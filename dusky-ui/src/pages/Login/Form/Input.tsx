import { Text, TextInput } from '../../../components';
import { Envelope, LockKey } from 'phosphor-react';

export interface InputProps {
  label: string;
  placeholder: string;
  type: 'email' | 'password';
}

export function Input({label, placeholder, type}: InputProps) {

  const labelId = label.replace(/[\W]/gi, '').toLowerCase();

  return (
      <label htmlFor={labelId} className='flex flex-col gap-3'>
        <Text className='font-semibold'>
          {label}
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            {type === 'email' ? (
              <Envelope />
            ) : (
              <LockKey />
            )}
          </TextInput.Icon>
          <TextInput.Input 
            id={labelId} 
            placeholder={placeholder}
            type={type} />
        </TextInput.Root>
      </label>
  );
}