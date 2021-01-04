import React, { useState } from 'react';

import Icon from '@mdi/react';
import { mdiEye, mdiEyeOff } from '@mdi/js';
import { Link } from 'react-router-dom';
import useAuth from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

import { Container, FormContainer, Heading, ErrorMessage, Form, Label, Input, PasswordInputWrapper, BtnToggleVisibility, BtnSend, FooterText, LoadingContainer, Dot } from './styles';

const Login: React.FC = () => {
  const { login } = useAuth();
  const history = useHistory();
  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const toggleVisibility = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    setPasswordVisible(!passwordVisible);
  }

  const handleSubmit = async (evt: React.FormEvent<HTMLDivElement>) => {
    evt.preventDefault();

    if (!email.trim() || !password.trim()) {
      return setError('Algum campo está vazio');
    }

    try {
      setError('');
      setLoading(true);
      
      await login(email, password);

      setEmail('');
      setPassword('');

      history.replace('/');
    }
    catch {
      setError('Não encontramos nenhum registro com essa combinação de usuário e senha');
    }

    setLoading(false);
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Heading>Bem vindo de volta 😎</Heading>
        { error && <ErrorMessage>{error}</ErrorMessage> }
        <Form>
          <Label>E-mail</Label>
          <Input
            type='email'
            onChange={(evt) => setEmail(evt.target.value)}
            value={email}
            required
          />
          <Label>Senha</Label>
          <PasswordInputWrapper>
            <Input 
              type={passwordVisible ? 'text' : 'password'}
              onChange={(evt) => setPassword(evt.target.value)}
              value={password}
              required
            />
            <BtnToggleVisibility
              title='Mostrar/esconder senha'
              onClick={toggleVisibility}
            >
              <Icon
                path={passwordVisible ? mdiEye : mdiEyeOff}
                size='24px'
                color='#b1bec7'
              />
            </BtnToggleVisibility>
          </PasswordInputWrapper>
          <BtnSend type='submit' disabled={loading}>
            { loading ? (
              <LoadingContainer>
                <Dot />
                <Dot />
                <Dot />
              </LoadingContainer>
            ) : 'Entrar' }
          </BtnSend>
        </Form>

        <FooterText>Ainda não tem uma conta? <Link to='/signup'>Criar agora</Link></FooterText>
      </FormContainer>
    </Container>
  );
}

export default Login;