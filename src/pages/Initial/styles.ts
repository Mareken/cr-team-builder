import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled(motion.main)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 32px;
`;