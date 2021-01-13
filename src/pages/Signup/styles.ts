import styled, { keyframes } from 'styled-components';

const loading = keyframes`
	0%, 20% {
		transform: translateY(0);
  }
	100% {
		transform: translateY(-10px);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px 0 270px 0;
`;

export const FormContainer = styled.div`
  padding: 32px;
  border-radius: 5px;
  width: 400px;
  background: #344852;
`;

export const Heading = styled.p`
  font-size: 1.125rem;
  color: #fff;
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 5px;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7bcbc;
  color: #d46868;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  color: #b1bec7;
  margin: 16px 0 8px 0;
  display: block;
`;

export const Input = styled.input`
  border-radius: 5px;
  flex: 1;
  height: 45px;
  padding: 0 8px;
  width: 100%;
  transition: all .15s ease-in-out;
  background: transparent;
  color: #fff;
  border: 1px solid #4f636e;

  &:focus {
    border-color: #0087C2;
    background: #22333B;
  }
`;

export const PasswordInputWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-right: 40px;
  }
`;

export const BtnToggleVisibility = styled.button`
  width: 38px;
  height: 38px;
  position: absolute;
  right: 4px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  transition: all .15s ease-in-out;

  &:hover {
    background: #22333B;
    
    svg > path {
      transition: all .15s ease-in-out;
      fill: #fff !important;
    }
  }
`;

export const BtnSend = styled.button`
  background: #0087C2;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  height: 45px;
  cursor: pointer;
  margin: 32px 0;
  transition: all .15s ease;
  width: 100%;

  &:hover {
    background: #006A98;
  }
`;

export const FooterText = styled.p`
  color: #b1bec7;

  a {
    color: #0087C2;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(5px);
`;

export const Dot = styled.div`
  width: 7px;
	height: 7px;
	border-radius: 50%;
	background: #fff;
  margin: 0 3px;
  
  &:first-of-type {
    animation: ${loading} .5s cubic-bezier(.2,.5,.2,1.3) infinite alternate;
  }

  &:nth-of-type(2) {
    animation: ${loading} .5s cubic-bezier(.2,.5,.2,1.3) infinite alternate;
    animation-delay: .1s;
  }

  &:last-of-type {
    animation: ${loading} .5s cubic-bezier(.2,.5,.2,1.3) infinite alternate;
    animation-delay: .2s;
  }
`;

export const HrLine = styled.div`
  width: 100%;
  height: .5px;
  background: #4f636e;
  border-radius: 1px;
`;

export const BtnGoogleLogin = styled.button`
  background: #4385F5;
  border-radius: 5px;
  height: 45px;
  cursor: pointer;
  transition: all .15s ease;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 32px 0;

  &:hover {
    background: #3775de;
  }
`;

export const GoogleLogo = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  margin-right: 8px;
  border-radius: 4px;
  background: #fff;
  padding: 8px;
`;

export const BtnGoogleLoginText = styled.p`
  color: #fff;
  text-align: center;
  margin: auto;
  transform: translateX(-15px);
`;