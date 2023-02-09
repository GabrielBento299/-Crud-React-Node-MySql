/* eslint-disable react/jsx-no-bind */
import UseUsers from '../../hooks/UseUsers';
import { useRef } from 'react';
import {
  Container, Overlay,
  FormContainer, Button,
} from './styles';
import { Input } from '../input';
import InputGroup from '../FormGroup';
import { IoClose } from 'react-icons/io5';

export default function ModalPage() {
  const {
    setModal, isLoading, onEdit, updateUser, getUsers, setOnEdit,
  } = UseUsers();

  const ref = useRef();

  async function teste(e) {
    e.preventDefault();

    if (onEdit) {
      const user = ref.current;

      const usersEditValue = {
        name: user.name.value,
        email: user.email.value,
        phone: user.phone.value,
        date: user.date.value,
      };
      await updateUser(usersEditValue);
    }
    setOnEdit(null);
    getUsers();
    setModal(false);
  }

  return (
    <Overlay>
      <Container>
        <div className="items">
          <h1>Faça sua edição!</h1>
          <button type="button" onClick={() => setModal(false)}> <IoClose /></button>
        </div>

        <FormContainer ref={ref} onSubmit={teste}>
          {isLoading && <p>Carregando...</p>}
          <InputGroup modal>
            <label>Nome</label>
            <Input
              modal
              name="name"
              defaultValue={onEdit.name}
            />
          </InputGroup>

          <InputGroup>
            <label>E-mail</label>
            <Input
              modal
              type="text"
              name="email"
              defaultValue={onEdit.email}
            />
          </InputGroup>

          <InputGroup>
            <label>Telefone</label>
            <Input
              modal
              name="phone"
              defaultValue={onEdit.phone}
            />
          </InputGroup>

          <InputGroup>
            <label>Data nascimento</label>
            <Input
              modal
              type="date"
              name="date"
              defaultValue={onEdit.date}
            />
          </InputGroup>

          <Button type="submit">Enviar</Button>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
