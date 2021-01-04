import styled from 'styled-components';

export const Container = styled.div`
  background: #344852;
  padding: 32px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all .15s ease;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const FooterMessage = styled.p`
  margin-bottom: 8px;
  color: #fff;

  a {
    color: #0087C2;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CopyrightMessage = styled.p`
  color: #b1bec7;
`;

export const SelectLanguage = styled.select`
  background: #22333B;
  border: none;
  padding: 8px;
  color: #fff;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  border: none;
`;