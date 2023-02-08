import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

export default function UseUsers() {
  const context = useContext(UsersContext);

  return context;
}
