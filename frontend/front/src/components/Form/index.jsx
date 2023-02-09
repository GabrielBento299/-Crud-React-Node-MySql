/* eslint-disable react/prop-types */
import { useRef } from 'react';
import UseUsers from '../../hooks/UseUsers';
import { Input } from '../input';
import InputGroup from '../FormGroup';
import {
  FormContainer, Button,
} from './styles';

export default function Form() {
  const {
    onEdit, getUsers, setOnEdit, createUser, isLoading, updateUser,
  } = UseUsers();

  const ref = useRef();

  // eslint-disable-next-line consistent-return
  function handleSubmit(e) {
    e.preventDefault();

    const user = ref.current;

    // if (!user.name.value || !user.email.value || !user.phone.value) {
    //   return toast.warn('Preencha todos os campos!');
    // }

    if (!onEdit) {
      const usersName = {
        name: user.name.value,
        email: user.email.value,
        phone: user.phone.value,
        date: user.date.value,
      };
      createUser(usersName);
    }

    user.name.value = '';
    user.email.value = '';
    user.phone.value = '';
    user.date.value = '';

    setOnEdit(null);
    getUsers();
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputGroup>
        <label>Nome</label>
        <Input
          name="name"
          placeholder="Digite seu nome"
        />
      </InputGroup>

      <InputGroup>
        <label>E-mail</label>
        <Input
          width="220px"
          type="text"
          name="email"
          placeholder="Digite seu e-mail"

        />
      </InputGroup>

      <InputGroup>
        <label>Telefone</label>
        <Input
          width="120px"
          name="phone"
          placeholder="seu telefone"
        />
      </InputGroup>

      <InputGroup>
        <label>Data nascimento</label>
        <Input
          type="date"
          name="date"
        />
      </InputGroup>

      {!isLoading ? <Button type="submit">Cadastrar</Button> : <Button disabled type="submit">Carregando...</Button>}
    </FormContainer>
  );
}
