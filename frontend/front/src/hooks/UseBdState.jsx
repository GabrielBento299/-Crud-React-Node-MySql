import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

export default function UseBdState() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [order, setOrder] = useState([]);

  async function getUsers() {
    try {
      setIsloading(true);
      const { data } = await api.get('/users');
      setUsers(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));

      // setOrder(response.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
      setIsloading(false);
    } catch (error) {
      toast.error(error);
    }
  }

  function handleUpdate(user) {
    console.log(user);
    setOnEdit(user);
  }

  async function handleDelete(id) {
    try {
      const { data } = await api.delete(`/users/${id}`);
      const newArray = users.filter((user) => user.id !== id);
      toast.success(data);
      setUsers(newArray);
    } catch (error) {
      toast.error(error);
    }

    setOnEdit(null);
  }

  return {
    users,
    onEdit,
    setOnEdit,
    getUsers,
    isLoading,
    order,
    handleDelete,
    handleUpdate,
    setUsers,
  };
}
