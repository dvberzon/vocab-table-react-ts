import React, { FunctionComponent } from 'react';

interface TextInputProps {
  placeholder: string,
  value: string,
  setValue: (value: string) => void,
}

export const TextInput = ({
  placeholder,
  value,
  setValue,
}: TextInputProps) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);