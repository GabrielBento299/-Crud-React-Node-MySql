import React, { Children } from 'react';
import { InputContainer, Input } from './styles';

export default function InputGroup({
  children, type, name, defaultValue, placeholder, label,
}) {
  return (
    <InputContainer>
      {children}
    </InputContainer>
  );
}
