import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  bg: string;
}

export const Container = styled(motion.div)`
  background: #344852;
  padding: 16px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 
  transition: all .15s ease;
  min-height: 200px;
  opacity: 0;

  @media screen and (max-width: 768px) {
    padding: 16px 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const FooterMessage = styled.div`
  display: flex;
  align-items: center;
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

export const HeartIcon = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => `url(${props.bg})`};
  width: 24px;
  height: 24px;
  margin: 0 8px;
`;