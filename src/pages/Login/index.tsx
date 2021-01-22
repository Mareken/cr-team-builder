import React, { useState } from 'react';

import Icon from '@mdi/react';
import { mdiEye, mdiEyeOff } from '@mdi/js';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import qs from 'query-string';
import useAuth from '../../context/AuthContext';
import useTeam from '../../context/TeamContext';

import { signInWithProvider } from '../../firebase';
import googleIcon from '../../assets/images/google_icon.svg';
import fbIcon from '../../assets/images/fb_icon.svg';

import { Container, FormContainer, Heading, ErrorMessage, Form, Label, Input, PasswordInputWrapper, BtnToggleVisibility, BtnSend, FooterText, LoadingContainer, Dot, HrLine, BtnGoogleLogin, GoogleLogo, BtnGoogleLoginText, BtnFacebookLogin, FacebookLogo, BtnFacebookLoginText } from './styles';

interface TeamProps {
  id: string;
  comp: any[]
}

const Login: React.FC = () => {
  const { login } = useAuth();
  const { saveTeam } = useTeam();
  const history = useHistory();
  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const toggleVisibility = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.preventDefault();
    setPasswordVisible(!passwordVisible);
  }

  const handleSubmit = async (evt: React.FormEvent<HTMLDivElement>) => {
    evt.preventDefault();
    evt.nativeEvent.preventDefault();

    if (!email.trim() || !password.trim()) {
      return setError('Algum campo está vazio');
    }

    setError('');
    setLoading(true);
    
    login(email, password)
      .then(res => {
        if (res.user) {
          setEmail('');
          setPassword('');
          setLoading(false);

          const team = localStorage.getItem('team');
  
          if (team) {
            const parsed: TeamProps = JSON.parse(team);

            saveTeam(res.user.uid, parsed);

            const queryParams = {
              t: parsed.id,
              u: res.user.uid
            }
  
            history.push({
              pathname: '/',
              search: qs.stringify(queryParams)
            });
          }
        }
      })
      .catch(() => {
        setError('Não encontramos nenhum registro com essa combinação de usuário e senha');
        setLoading(false);
      })
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

        <HrLine />

        <BtnGoogleLogin onClick={() => signInWithProvider('google')}>
          <GoogleLogo src={googleIcon} />
          <BtnGoogleLoginText>Entrar com Google</BtnGoogleLoginText>
        </BtnGoogleLogin>

        <BtnFacebookLogin onClick={() => signInWithProvider('facebook')}>
          <FacebookLogo src={fbIcon} />
          <BtnFacebookLoginText>Entrar com Facebok</BtnFacebookLoginText>
        </BtnFacebookLogin>

        <FooterText>Ainda não tem uma conta? <Link to='/signup'>Criar agora</Link></FooterText>
      </FormContainer>
    </Container>
  );
}

export default Login;