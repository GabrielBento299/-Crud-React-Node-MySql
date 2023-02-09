/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(true);
    setOnEdit(null);
  }

  async function getUsers() {
    try {
      setIsloading(true);
      const { data } = await api.get('/users');
      setUsers(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    } finally {
      setIsloading(false);
    }
  }

  async function createUser(usersName) {
    try {
      const { data } = await api.post('/users', usersName);
      toast.success(data);
    } catch (error) {
      toast.error(error);
    }
  }

  async function updateUser(usersName) {
    try {
      setIsloading(true);
      const { data } = await api.put(`/users/${onEdit.id}`, usersName);
      toast.success(data);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsloading(false);
    }
  }

  function handleUpdate(user) {
    setModal(true);
    setOnEdit(user);
  }

  async function handleDelete(id) {
    try {
      setIsloading(true);
      const { data } = await api.delete(`/users/${id}`);
      const newArray = users.filter((user) => user.id !== id);
      toast.success(data);
      setUsers(newArray);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsloading(false);
      setOnEdit(null);
    }
  }

  return (
    <UsersContext.Provider value={{
      getUsers,
      setUsers,
      onEdit,
      users,
      setOnEdit,
      isLoading,
      handleUpdate,
      handleDelete,
      createUser,
      handleModal,
      modal,
      setModal,
      updateUser,
    }}
    >
      {children}
    </UsersContext.Provider>
  );
}
