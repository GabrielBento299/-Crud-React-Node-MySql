/* eslint-disable react/jsx-no-bind */
import { toast, ToastContainer } from 'react-toastify';
import { Container, Global } from './assets/styles/global';

import 'react-toastify/dist/ReactToastify.css';

import Form from './components/Form';
import Grid from './components/Grid';
import { UsersProvider } from './context/UsersContext';

function App() {
  return (
    <UsersProvider>
      <Container>
        <h1>Usuarios</h1>
        <Form />
        <Grid />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER_CENTER} />
      <Global />
    </UsersProvider>
  );
}

export default App;
