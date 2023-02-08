/* eslint-disable react/prop-types */
import {
  Table, Thead, Tr, Th, Tbody, Td,
} from './styles';

import { FaTrash, FaEdit } from 'react-icons/fa';
import { useEffect } from 'react';
import UseUsers from '../../hooks/UseUsers';
import ModalPage from '../Modal';

export default function Grid() {
  const {
    users, isLoading, setUsers, handleUpdate, handleDelete, getUsers, modal,
  } = UseUsers();

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      {isLoading && <p>Carregando...</p>}
      <span>{users.length} {users.length === 1 ? 'Usuario cadastrado' : 'Usuarios Cadastrados'}</span>
      {users.length > 0
         && (
         <Table>
           <Thead>
             <Tr>
               <Th>Nome</Th>
               <Th>E-mail</Th>
               <Th onlyWeb>Fone</Th>
               <Th>Data de nascimento</Th>
               <Th />
               <Th />
             </Tr>
           </Thead>
           <Tbody>
             {users.map((user) => (
               <Tr key={user.id}>
                 <Td width="20%">{user.name}</Td>
                 <Td width="25%">{user.email}</Td>
                 <Td width="15%" onlyWeb>{user.phone}</Td>
                 <Td width="20%" onlyWeb>{user.date}</Td>
                 <Td alignCenter width="5%"> <FaEdit onClick={() => handleUpdate(user)} /></Td>
                 <Td alignCenter width="5%"> <FaTrash onClick={() => handleDelete(user.id)} /></Td>
               </Tr>
             ))}
           </Tbody>
         </Table>
         )}
      {modal && <ModalPage />}
    </>
  );
}
